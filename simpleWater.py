from time import sleep
from gpiozero import InputDevice

signal = InputDevice(21)

while True:
	if not signal.is_active:
		print("Is that water??????"+" "+signal)
	else:
		print("I want my waterrrrrr :((((")
		sleep(1)