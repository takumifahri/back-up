<template>
    <v-main class="pa-10 ">
        <v-contaienr >
            <!-- Foto -->
            <v-card :style="cardStyle" style="opacity: 0.5;"></v-card>
            
            <!-- Button bus or Train -->
            <div id="bus"  class="d-flex mx-auto rounded-pill my-10 " style="width: 250px; height: 50px; background-color: white;">
                <button  onclick="location.href='/'" style="width: 125px; height: 50px; background-color: #E8DEF8;" class="rounded-ts-pill pa-3 rounded-bs-pill border">
                    <h4  class="text-black text-center ">Bus</h4>
                </button>  
                <button id="train" onclick="location.href='/train'" style="width: 125px; height: 50px; background-color: white;" class="rounded-te-pill pa-3 rounded-be-pill border">
                    <h4  class="text-black text-center ">Train</h4>
                </button>
            </div>
            
            <!-- Isi bus -->
            <section class="border">
                <v-list :items="items" class="pa-2" lines="three" items-props>
                </v-list>
                
            </section>
        </v-contaienr>
    </v-main>
</template>
<script >
    import imageUrl from '@/assets/tiket-bus-sinar-jaya.jpg';

    
    export default{
        name : 'BusComp',
        data(){
            return{
                cardStyle : {
                    height : '300px',
                    width : '100%',
                    backgroundImage : `url(${imageUrl})`,
                    backgroundSize : 'fit',
                    backgroundPosition : 'center',
                },
                listStyle : {
                    fontSize :'30px'
                }
                ,
                items : [ // props itu untuk nambahkan property kayak icon dsb
                    {
                        prependAvatar : 'https://th.bing.com/th/id/OIP.0knG318bl0K7VkNsNTxtqQHaEf?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                        title : 'Bus Sinar Jaya',
                        value : '1',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    },
                    {type : 'divider', inset : true},
                    {
                        title : 'Bus Sinar Jaya',
                        value : '2',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    },
                    {type : 'divider', inset : true},
                    {
                        title : 'Bus Sinar Jaya',
                        subtitle :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis doloremque assumenda commodi eos ratione magni aut animi laudantium autem?',
                        value : '3',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    },
                    {type : 'divider', inset : true},
                    {
                        title : 'Bus Sinar Jaya',
                        subtitle :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis doloremque assumenda commodi eos ratione magni aut animi laudantium autem?',
                        value : '3',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    },
                    {type : 'divider', inset : true},
                    {
                        title : 'Bus Sinar Jaya',
                        subtitle :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis doloremque assumenda commodi eos ratione magni aut animi laudantium autem?',
                        value : '3',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    }
                    ,
                    {type : 'divider', inset : true},
                    {
                        title : 'Bus Sinar Jaya',
                        subtitle :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis doloremque assumenda commodi eos ratione magni aut animi laudantium autem?',
                        value : '3',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    },
                    {type : 'divider', inset : true},
                    {
                        title : 'Bus Sinar Jaya',
                        subtitle :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis doloremque assumenda commodi eos ratione magni aut animi laudantium autem?',
                        value : '3',
                        props :{
                            appendIcon : 'mdi-heart-outline'
                        }
                    }
                ]
                // items: [
                //     {
                //         prependAvatar: '@/assets/tiket-bus-sinar-jaya.jpg',
                //         title: 'Brunch this weekend?',
                //         subtitle: <span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                //     },
                //     { type: 'divider', inset: true },
                //     {
                //         prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                //         title: 'Summer BBQ',
                //         subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
                //     },
                //     { type: 'divider', inset: true },
                //     {
                //         prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                //         title: 'Oui oui',
                //         subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
                //     },
                //     { type: 'divider', inset: true },
                //     {
                //         prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                //         title: 'Birthday gift',
                //         subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
                //     },
                //     { type: 'divider', inset: true },
                //     {
                //         prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                //         title: 'Recipe to try',
                //         subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
                //     },
                // ]
            }
        }
    };
</script>
