//
//  ToDoListApp.swift
//  ToDoList
//
//  Created by Jenna Han on 8/8/23.
//

import FirebaseCore
import SwiftUI

@main
struct ToDoListApp: App {
    
    init(){
        FirebaseApp.configure()
    }
    
    var body: some Scene {
        WindowGroup {
            MainView()
        }
    }
}
