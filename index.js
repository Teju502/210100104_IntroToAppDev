import 'package:flutter/material.dart'; 
  
 void main() { 
   runApp(CounterApp()); 
 } 
  
 class CounterApp extends StatefulWidget { 
   @override 
   CounterAppState createState() => CounterAppState(); 
 } 
  
 class CounterAppState extends State<CounterApp> { 
   int counter = 0; 
  
   void _incrementCounter() { 
     setState(() { 
       counter++; 
     }); 
   } 
  
   void _decrementCounter() { 
     setState(() { 
       counter--; 
     }); 
   } 
  
   @override 
   Widget build(BuildContext context) { 
     return MaterialApp( 
       title: 'Counter App', 
       home: Scaffold( 
         appBar: AppBar( 
           title: Text('Counter App'), 
         ), 
         backgroundColor: Colors.yellow, // Change the background color here 
         body: Center( 
           child: Column( 
             mainAxisAlignment: MainAxisAlignment.center, 
             children: <Widget>[ 
               Text( 
                 'Counter Value:', 
                 style: TextStyle(fontSize: 24), 
               ), 
               Text( 
                 '$counter', 
                 style: TextStyle(fontSize: 48), 
               ), 
               SizedBox(height: 60), 
               Row( 
                 mainAxisAlignment: MainAxisAlignment.center, 
                 children: <Widget>[ 
                   ElevatedButton( 
                     onPressed: _incrementCounter, 
                     child: Text('INC'), 
                     style: ElevatedButton.styleFrom( 
                       primary: Colors.red, 
                     ), 
                   ), 
                   SizedBox(width: 60), 
                   ElevatedButton( 
                     onPressed: _decrementCounter, 
                     child: Text('DEC'), 
                     style: ElevatedButton.styleFrom( 
                       primary: Colors.green, 
                     ), 
                   ), 
                 ], 
               ), 
             ], 
           ), 
         ), 
       ), 
     ); 
   } 
 }
