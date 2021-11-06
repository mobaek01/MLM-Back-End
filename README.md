# MLM-Back-End

##Issue: 'session' info is lost on refresh.
##Solution??: Somehow store the session state in local storage.

On login, user gains a session object

Session = {
   name: String,
   online: Boolean
}

const = [online, setOnline] = useState('false')

OnLogin => make axios call to findOneAndUpdate({username},
   session:{
      name:username from login form,
      online:true
   }
   setOnline(true)
   *On login, save online state to local storage

OnLogout => make axios call to findOneAndUpdate({username},
   session:{
      name:Username,
      online:false
   }
   setOnline(false)


useEffect( retrieve online state from local storage )

online ? show logout button : show login button
------------------------------------------------------------------------------

const checkStatus = (NAME) => {
//find a session with this NAME;
   if foundSession.online == true,
      return true'
   else
      return false
}

checkStatus(username)? Print Welcome username! :     
