const components = {
    // // register
    // register: `a long string`,
    // // login 
    // login: `another long string`,
    // // ..
    // alert : function () {
    //     alert("Hello from components")
    //     //this == components
    // }
}

// components.register ~ form register

components.register = `
<section class="register-container">
    <div class="form-container">
        <div class="logo">
            <span>Techkids Chat</span>
        </div>
    
        <div class="form-wrapper">
            <form>
                <div class="name-wrapper">
                    <div class="input-wrapper">
                        <input type="text" name="fistname" placeholder="First name">
                    </div>
                    <div class="input-wrapper">
                        <input type="text" name="lastname" placeholder="Last name">
                    </div>
                </div>
                <div class="input-wrapper">
                    <input type="email" name="email" placeholder="Email">
                </div>
                <div class="input-wrapper">
                    <input type="password" name="password" placeholder="Password">
                </div>
                <div class="input-wrapper">
                    <input type="password" name="confirmPassword" placeholder="Confrim password">
                </div>
                <div class="form-footer">
                    <a href="#" id="register-a">Already have an account? Login</a>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
</section>
`

components.login = `
<section class="login-container">
    <div class="form-container">
        <div class="logo">
            <span>Techkids Chat</span>
        </div>

        <div class="form-wrapper">
            <form>
                <div class="input-wrapper">
                    <input type="email" name="email" placeholder="Email">
                </div>
                <div class="input-wrapper">
                    <input type="password" name="password" placeholder="Password">
                </div>
                <div class="form-footer">
                    <a href="#" id="login-a">Not yet have an account? Register</a>
                    <button type="submit">Log in</button>
                </div>
            </form>
        </div>
    </div>
</section>
`