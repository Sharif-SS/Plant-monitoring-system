import RPi.GPIO as GPIO
import time

#gpio setup

channel = 21
GPIO.setmode(GPIO.BCM)
GPIO.setup(channel, GPIO.IN)

def callback(channel):
		if GPIO.input(channel):
			print("No watter detected")
		else:
			print("water detected")
			
GPIO.add_event_detect(channel, GPIO.BOTH, bouncetime=300) #let us know when pin goes high or low
GPIO.add_event_callback(channel, callback) #assign function to gpio pin, run fucntion to change

#infinite loop

while True:
	time.sleep(1)