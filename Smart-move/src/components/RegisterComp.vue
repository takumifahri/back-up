<template>
    
</template>

<script>
    import logo from '@/assets/logo-Smart-move.png'
    import ImageWeb from '@/assets/background.png'
    export default{
        
        name : 'RegisterComp',
        
        data(){
            return{
                valid : false,
                Username : '',
                Password :'',
                // UsernameRules : [
                //     v => !!v || 'Username is required!',
                //     v => (v && v.length <=50) || 'Username must be less than 50 characters!'
                // ],
                LoginStyle : [
                    {
                        backgroundImage : `url(${ImageWeb})`,
                        backgroundSize : 'cover',
                        backgroundPosition : 'center',
                        minHeight : '100vh',
                        width : '100%'
                    }
                ]
                    ,
                FormStyle : [
                    {
                        height : '80vh',
                        width : 'auto',
                        
                    }
                ]
                    ,
                logSmart : [
                    {
                        backgroundImage : `url(${logo})`,
                        
                    }
                ]
              
            }
        }
    }
</script>

<script setup>

</script>