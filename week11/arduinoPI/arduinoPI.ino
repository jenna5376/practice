
#include "Keyboard.h"



const int buttonPin = 12;     // the number of the pushbutton pin

// variables will change:
int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
    Serial.begin(1000);
  pinMode(buttonPin, INPUT);
}

void loop() {
  
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);
 if(buttonState!=0){           
     Keyboard.write('w');
  }  // print as an ASCII-e


}

//
