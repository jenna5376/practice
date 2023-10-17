//
//  LoginView.swift
//  ToDoList
//
//  Created by Jenna Han on 8/8/23.
//

import SwiftUI

struct LoginView: View {
    
    @StateObject var viewModel = LoginViewModel()
    
    var body: some View {
        NavigationView{
            VStack{
                //header
//                HeaderView(title: "To Do List",
//                            subtitle: "Get Things Done",
//                           angle: 15,
//                           backgroundColor: .pink)
                
                
                Form{
                    
                    if !viewModel.errorMessage.isEmpty{
                        Text(viewModel.errorMessage)
                            .foregroundColor(Color.red)
                    }
                    
                    TextField("Email Address", text: $viewModel.email)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                    SecureField("Password", text: $viewModel.password)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                    
                    ButtonView(
                        title: "Log In",
                        background: .blue)
                    {
                        viewModel.login()
                    }
                }
                
                
                //create account
                VStack{
                    Text("New around here?")
                    NavigationLink("Create an Account", destination: RegisterView())
                    .padding(.bottom, 50)
                }
                
            }
        }
    }
}

struct LoginView_Previews: PreviewProvider {
    static var previews: some View {
        LoginView()
            .previewInterfaceOrientation(.portrait)
    }
}
