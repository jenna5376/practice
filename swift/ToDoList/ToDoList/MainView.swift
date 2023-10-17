//
//  ContentView.swift
//  ToDoList
//
//  Created by Jenna Han on 8/8/23.
//

import SwiftUI

struct MainView: View {
    var body: some View {
        NavigationView{
            LoginView()
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        MainView()
    }
}
