//
//  Task.swift
//  FigmaToCode
//
//  Created by Jenna Han on 8/15/23.
//

import Foundation

struct Task: Identifiable {
    
    var id = UUID()
    var title: String
    
    static func getDummyTasks() -> [Task]{
        
        var tasks = [Task]()
        
        tasks.append(Task(title: "Check emails"))
        tasks.append(Task(title: "Discuss marketing plan"))
        tasks.append(Task(title: "Morning meeting"))
        tasks.append(Task(title: "Branding campagin"))
        
        return tasks
    }
}
