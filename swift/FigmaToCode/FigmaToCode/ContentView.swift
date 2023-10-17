//
//  ContentView.swift
//  FigmaToCode
//
//  Created by Jenna Han on 8/15/23.
//

import Foundation
import SwiftUI

struct ContentView: View {
    
//    init() {
//        for fontFamily in UIFont.familyNames {
//            for font in UIFont.fontNames(forFamilyName: fontFamily){
//                print("--\(font)")
//            }
//        }
//    }
    
    var body: some View {
        TabView{
            
            NavigationView {
                TaskListView()
            }
            .tabItem {
                Image("ic-tasklist")
                    .renderingMode(.template)
            }
            
            InboxView()
                .tabItem {
                    Image("ic-inbox")
                        .renderingMode(.template)
                }
            RemindersView()
                .tabItem {
                    Image("ic-reminders")
                        .renderingMode(.template)
                }
            SettingsView()
                .tabItem {
                    Image("ic-settings")
                        .renderingMode(.template)
                }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
