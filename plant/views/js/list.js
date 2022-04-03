 $(document).ready(function(){
    /**
     * This operation binds a click event to the LIST tab
     */
     console.log("This is working")

    $("#btn-list-all").click(function(event){
        event.preventDefault();
        $("#list-collection").empty();
        /**  Assembling the table everytime the button is clicked.
            This will make sure that if things are added, deleted or modified in the other tab,
            this table will be always up to date.
        */

        let tbl = `<table id="table-list">
        <h3><tr>
        <th>Moisture Value</th>
          <th>Room Temperature</th>
          <th>Room Humidity</th>
        </tr>
      </table>`
        


        $("#list-collection").append(tbl);
        // Here we query the server-side
        $.ajax({
            url: '/reading-all',
            type: 'GET',
            contentType: 'application/json',                        
            success: function(response){
                console.log(response);
                for(let i = 0; i < response.length; i++) {
                    let obj = response[i];
                    let tbl_line='';
                    /**  To add an effect in the table, we can apply
                         even and odd classes. */                    
                    if (i%2 ==0){
                        tbl_line = '<tr class="even-row"><td>'+obj.moisture+'</td><td>'+obj.roomTemp+'</td><td>'+obj.roomHumidity+'</td>';

                    }else{
                        tbl_line = '<tr class="even-row"><td>'+obj.moisture+'</td><td>'+obj.roomTemp+'</td><td>'+obj.roomHumidity+'</td>';
                    }                    
                    $("#table-list").append(tbl_line)
                }
            },
            // If there's an error, we can use the alert box to make sure we understand the problem
            error: function(xhr, status, error){
                var errorMessage = xhr.status + ': ' + xhr.statusText
                alert('Error - ' + errorMessage);
            }
        });
    });
    
});  