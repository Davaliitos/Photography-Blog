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
<style>
/* General Styles*/

*,
*::before,
*::after{
    margin: 0;
    padding: 0;
}
html{
    font-size: 10px;
    font-family: 'Lato',sans-serif;;
    color : #101010;
}

button{
    font-family: 'Lato',sans-serif;
    color: #FFF;
    background: linear-gradient(90deg, #AC519C 0.83%, #E5424F 100%);
    cursor: pointer;
    box-shadow: 0px 3px 10px rgba(104, 104, 104, 0.5);
    -moz-box-shadow: 0px 3px 10px rgba(104, 104, 104, 0.5);
    -ms-box-shadow: 0px 3px 10px rgba(104, 104, 104, 0.5);;
    -webkit-box-shadow: 0px 3px 10px rgba(104, 104, 104, 0.5);
    padding: 1.1rem 0 1.1rem 0;
}

button:hover{
    background: linear-gradient(90deg, #B678AA 1.29%, #E28990 100%);
}

.red-text{
    color: red !important;
}
.green-text{
    color: green !important;
}

/** Container Styles*/

.container{
    width: 90rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-areas: 'blog sidebar';
    grid-gap: 7rem;
    padding-top: 7.6rem;
    padding-bottom: 7.6rem;
}


/**Content Styles */

.content{
    grid-area: 'blog';
    width: 56rem;
}
.content__image{
    width: 100%;
    margin-top: 2rem;
}
.content__header{
    font-size: 2.6rem;
    line-height: 3.1rem;
    font-weight: bold;
    width: 100%;
}
.content__subheader{
    font-size: 1.8rem;
    line-height: 2.2rem;
    font-weight: bold;
    margin-top: 4.5rem;
    margin-bottom: 2.2rem;
    letter-spacing: .008rem;
    font-weight: 700;
}
.content__paragraph{
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 300;
    line-height: 2.4rem;
}
.content__header__divider{
    margin-top: 1.6rem;
    margin-bottom: 2.8rem;
    border-width: 1px;
    border-color: #E5424F;
}


/**Sidebar Styles */

.sidebar{
    width: 27rem;
    height: 64rem;
    background: #F5F5F5;
    margin-top: 7.8rem;
    grid-area: 'sidebar';
}

.sidebar__button{
    display: block;
    width: 22rem;
    font-size: 1.5rem;
    line-height: 1.8rem;
    margin: 1.8rem auto;
}

/**Modal Styles */

.modal-container{
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgba(15, 15, 15, 0.8);
    mix-blend-mode: normal;
}
.modal-container__dialog{
    position: relative;
    box-sizing: border-box;
    background-color: #FFF;
    width: 57rem;
    height: 31rem;
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.5);
    -ms-box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.5);
    opacity: 1;
}
.modal-container__grid{
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto auto auto auto;
    grid-row-gap: 2.3rem;
    width: 44rem;
    margin-top: 1.8rem;
}
.modal-container__hidden{
    display: none;
    visibility: hidden;
}

.modal-container__dialog__progress-bar{
    height: 3rem;
    margin: 0 auto;
    width: 100%;
}

.progress-bar{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.progress-bar hr{
    margin-top: 1.1rem;
    border-width: 1px;
    border-color: #E5424F;
}

.progress-bar .not-selected{
    border-color: #E5E5E5;
}

.modal-container__dialog__close {
    cursor: pointer;
    position: absolute;
    top: 2rem;
    right: 1.1rem;
    font-size: 3.8rem;
    transform: translate(0%, -50%);
}

.modal-container__dialog__progress-bar__page{
    font-style: normal;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 1.7rem;
    text-align: center;
    color: #848484;
}

.modal_container__title{
    font-style: normal;
    font-weight: 700;
    font-size: 2.3rem;
    line-height: 2.8rem;
    text-align: center;
}

.modal-container__dialog__input{
    width: 100%;
    height: 4rem;
    font-size: 1.6rem;
    line-height: 1.9rem;
    font-style: normal;
    font-weight: 300;
    text-indent: 1.1rem;
    padding-top: 1.4rem;
    display: block;
    -moz-box-shadow: inset 0px 1px 5px rgba(142, 142, 142, 0.5);
    -ms-box-shadow: inset 0px 1px 5px rgba(142, 142, 142, 0.5);
    -webkit-box-shadow: inset 0px 1px 5px rgba(142, 142, 142, 0.5);
    box-shadow: inset 0px 1px 5px rgba(142, 142, 142, 0.5);
}

.modal-container__dialog__input:focus + .floating-label{
    font-size: 1.2rem;
    line-height: 1.4rem;
    top: 15.6rem;
}

.floating-label{
    position: absolute;
    pointer-events: none;
    transition: 0.2s ease all;
    font-size: 1.8rem;
    font-weight: 300;
    top: 17rem;
    left: 7.7rem;
    color: #828282;
}

.moved{
    font-size: 1.2rem;
    line-height: 1.4rem;
    top: 15.5rem;
}

.modal-container__dialog__submit{
    height: 4.8rem;
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.2rem;
}



</style>