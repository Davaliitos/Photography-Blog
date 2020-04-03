<template>
    <section class="container">
        <div class="content">
            <h2 class="content__header">10 Best Photo Apps For Incredible Iphone Photography (2020 Edition)</h2>
            <hr class="content__header__divider">
            <p class="content__paragraph">How do you capture more interesting travel photos with your iPhone? How do you avoid taking the same cliché vacation photos that everyone else takes? I recently interviewed Steffen Geldner – a talented iPhone photographer with a passion for travel. In this article, Steffen reveals 7 tips for shooting beautiful travel photos that will preserve the amazing memories of your trip. Read on to discover how to take better travel photos with your iPhone!</p>
            <img :src="imageURL" class="content__image">
            <h2 class="content__subheader">1. Research Your Destination To Find The Best Photo Opportunities</h2>
            <p class="content__paragraph">Before your trip, I recommend researching the destination to find the most interesting photo opportunities.<br><br>
                I always research the location I’m traveling to. I do this extensively and obsessively!<br><br>
                It’s up to you how much research you do. But you should definitely spend a bit of time looking up some great places to take pictures.<br><br>
                So, what kind of research can you do?<br><br>
                First, you could search for photos that other people have taken at the locations you’re planning to visit.<br><br>
                Search on Instagram or Google to get an idea of the kinds of photos people take there.</p>
            <h2 class="content__subheader">2. Capture Your Journey To Tell The Complete Story Of Your Travels</h2>
            <p class="content__paragraph">Travel photography isn’t just about photographing the destination.<br><br>
            For a more complete photographic story, capture your journey to and from the location you’re visiting.<br><br>
            If you’re traveling by plane, try to get a window seat where you have a view of the wing or propeller.<br><br>
            And of course, you could capture a beautiful aerial view of clouds, mountains, or city lights as you’re flying above.<br><br>
            Your journey will often involve several different types of transport. And they all offer great photo opportunities.<br><br>
            Whether you’re traveling by car, taxi, bus, train, boat, or plane, try to capture some interesting photos.</p>
        </div>
        <div class="sidebar">
            <button class="sidebar__button" @click="openModal">Send Me The Tips</button>
        </div>
        <div class="modal-container" :class="isOpened">
            <div class="modal-container__dialog">
                <span class="modal-container__dialog__close" @click="closeModal">&times;</span>
                <div class="modal-container__grid">
                    <div class="modal-container__dialog__progress-bar">
                        <h2 class="modal-container__dialog__progress-bar__page">Step 1 of 2</h2>
                        <div class="progress-bar">
                            <hr>
                            <hr class="not-selected">
                        </div>
                    </div>
                    <h3 class="modal_container__title">Enter your Email To Get <span class="green-text">FREE</span> iPhone Photography Email Tips:</h3>
                    <div>
                        <input type="text" class="modal-container__dialog__input" v-model="email" :class="emailStatus">
                        <span class="floating-label" :class="[emailStatus, emailIsNotEmpty]">{{emailMessage}}</span>
                    </div>
                    <button class="modal-container__dialog__submit" @click="validateEmail">Send Me The Tips »</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default{
    data: function(){
        return{
            modalOpen : false,
            email : '',
            emailValidated : undefined
        }
    },
    computed:{
        imageURL: function(){
            if(window.devicePixelRatio > 1.5){
                return require("../../images/globes.jpg")
            }
            else{
                return require("../../images/aws-cloud-large.png")
            }
        },
        isOpened : function(){
            if(!this.modalOpen){
                return 'modal-container__hidden'
            }
            return ''
        },
        emailStatus: function(){
            if(this.emailValidated === undefined){
                return ''
            }
            else if(this.emailValidated === false){
                return 'red-text'
            }
            else{
                return 'green-text'
            }
        },
        emailIsNotEmpty: function(){
            if(this.email !== ''){
                return 'moved'
            }
            else{
                return ''
            }
        },
        emailMessage : function(){
            if(this.emailValidated === undefined){
                return 'Please enter your email here'
            }
            else if(this.emailValidated === false){
                return 'Please enter a valid email address'
            }
            else{
                return 'Success'
            }
        }
    },
    methods:{
        openModal : function(){
            this.modalOpen = true;
        },
        closeModal : function(){
            this.modalOpen = false;
            this.email = '';
            this.emailValidated = undefined;
        },
        validateEmail: function(){
            var emailExpression = /\S+@\S+\.\S+/;
            this.emailValidated = emailExpression.test(this.email);
        }
    }
}
</script>
<style src="../../styles/blog.style.css">
</style>