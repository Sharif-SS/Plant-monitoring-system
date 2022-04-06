#for the mongodb interaction
import pymongo
from pymongo import MongoClient

#for the analog sensors
from time import sleep
from gpiozero import InputDevice

#connecting to mongodb atlas
cluster = MongoCLient("mongodb+srv://MUN:1234@planecrash111.lvgp1.mongodb.net/plantDataDB?retryWrites=true&w=majority")
db=cluster["test"]
collection = db["plantDataDB"]


#presets
notActive = {"moisture":"0"}
active = {"moisture":"1"}

#from moisture sensor
signal = InputDevice(21)

while True:
    if not signal.is_active:
           results = collection.insert_one(notActive)
           sleep(1000)
    else: 
           results = collection.insert_one(active)
           sleep(1000)


#from temperature sensor


#from humidity sensor
