//
//  ContentView.swift
//  War Card Game
//
//  Created by Jenna Han on 6/12/23.
//

import SwiftUI

struct ContentView: View {
    
    @State var playerCard = "card7"
    @State var cpuCard = "card13"
    
    @State var playerScore:Int = 0;
    @State var cpuScore:Int = 0;
    
    var body: some View {
        ZStack{
            Image("background-cloth")
                .resizable()
                .ignoresSafeArea()
            VStack(spacing: 48.0){
                Image("logo")
                HStack {
                    Spacer()
                    Image(playerCard)
                    Spacer()
                    Image(cpuCard)
                    Spacer()
                }
                
              
                Button {
                    deal()
                } label: {
                    Image("button")
                }
                HStack{
                    Spacer()
                    VStack(){
                        Text("Player")
                            .font(.headline)
                            .padding(.bottom, 10.0)
                        Text(String(playerScore))
                            .font(.largeTitle)
                    }
                    Spacer()
                    VStack(){
                        Text("CPU")
                            .font(.headline)
                            .padding(.bottom, 10.0)
                        Text(String(cpuScore))
                            .font(.largeTitle)
                    }
                    Spacer()
                }
                .foregroundColor(.white)
            }
        }
    }
    
    func deal(){
        //randomize player + cpu cards
        
        var playerVal = Int.random(in: 2...14)
        var cpuVal = Int.random(in: 2...14)
        
        playerCard = "card" + String(playerVal)
        cpuCard = "card" + String(cpuVal)
        //update scores
        
        if playerVal > cpuVal {
            playerScore += 1
        }
        else if cpuVal > playerVal {
            cpuScore += 1
        }
        
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
