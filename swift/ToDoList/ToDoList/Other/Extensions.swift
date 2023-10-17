//
//  Extensions.swift
//  ToDoList
//
//  Created by Jenna Han on 8/8/23.
//

import Foundation

extension Encodable {
    func asDictionary() -> [String: Any]{
        guard let data = try? JSONEncoder().encode(self) else {
            return [:]
        }
        do {
            let json = JSONSerialization.jsonObject(with: <#T##Data#>) as? [String: Any]
            return json ?? [:]
        }
        catch{
            return [:]
        }
        
    }
}
