import React, {useEffect, useContext, useState} from 'react'
import {navigate} from '@reach/router'
import Parse from 'parse'
import FaceBookLogo from '../../../assets/icons/facebook-circular-logo.svg'
import styles from './index.module.css'
import Button from '../../common/Button'
import {AuthContext} from '../../../contexts/AuthContext'
 

function FacebookLogin ({className}){
    const [isLoading, setLoading] = useState(false)
    const {setCurrentUser} = useContext(AuthContext)
    
    useEffect(()=>{
        window.fbAsyncInit = function() {
            Parse.FacebookUtils.init({
              appId      : '954266884973298', // Facebook App ID
              cookie     : true,  // enable cookies to allow Parse to access the session
              xfbml      : true,  // initialize Facebook social plugins on the page
              version    : 'v5.0' // point to the latest Facebook Graph API version
            });
            // Run code after the Facebook SDK is loaded.
            // ...
          };
        
          // Load Facebook SDK
          (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
    },[])

    const login = async () => {
        try{
            setLoading(true)
            const user = await Parse.FacebookUtils.logIn("user_gender,email")
            
            //if new user register and login
            if (!user.existed()){
                window.FB.api('/me?fields=id,name,email,gender,picture.width(480),permissions', function (response) {
                    
                    saveFacebookImage(response.picture.data.url, user)

                    user.set('username', response.id);
                    user.set('email', response.email);
                    user.set('gender', response.gender);
                    user.save()
                    .then(()=>{
                        setLoading(false)
                        setCurrentUser(Parse.User.current())
                        navigate('/home')
                    })
                })
            }else{
                //if user existed login him/her in
                setLoading(false)
                setCurrentUser(Parse.User.current())
            }
        }
        catch(err){
            setLoading(false)
            alert(err)
        }

    }       
    
    const saveFacebookImage = async (url, user) => {
        let response = await fetch(url);
        let data = await response.blob();
        let metadata = {
            type: 'image/jpeg'
          };

        let file = new File([data], "test.jpg", metadata);


        var newfile = new Parse.File("facebookProfileImage.jpg", file, "image/jpg");
        
        user.set('profilePicture', newfile)
        user.save()
    }
    
    return(
            <Button type="button" className={`${styles.facebook_button} ${className}`} loading={isLoading} typeStyle="secondary" onClick={login}>
                <span>Entrar con FaceBook </span>
                <img src={FaceBookLogo} alt="Facebook Login" className={styles.facebook_logo}/>
            </Button>
    )
}


export default FacebookLogin