//
//  FontStyles.swift
//  FigmaToCode
//
//  Created by Jenna Han on 8/15/23.
//

import Foundation
import SwiftUI

extension Font {
    static var navTitle: Font {
        return Font.custom("Inter-Bold", size: 17)
    }
    
    static var taskText: Font {
        return Font.custom("Inter-SemiBold", size: 14)
    }
    
    static var taskAlarmText: Font {
        return Font.custom("Inter-SemiBold", size: 12)
    }
    
}
