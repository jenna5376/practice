//
//  User.swift
//  ToDoList
//
//  Created by Jenna Han on 8/8/23.
//

import Foundation

struct User: Codable {
    let id: String
    let name: String
    let email: String
    let joined: TimeInterval
}
