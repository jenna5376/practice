//
//  ContentView.swift
//  L1 Demo
//
//  Created by Jenna Han on 6/12/23.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color(red: 0, green: 0, blue: 0)
                .ignoresSafeArea()

            VStack {
                Image("totoro")
                    .resizable()
                    .cornerRadius(16)
                    .aspectRatio(contentMode: .fit)
                    .padding(/*@START_MENU_TOKEN@*/.all/*@END_MENU_TOKEN@*/)
                Text("Niagara Falls")
                    .font(.largeTitle)
                    .fontWeight(.semibold)
                    .foregroundColor(Color.white)
            }
        }
        
       
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
