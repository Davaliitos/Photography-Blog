<template>
    <div>
        <div class="page-container">
            <div class="page-center">
                <div class="content-sidebar-wrap">
                    <main class="content">
                        <article class="entry">
                            <header class="entry-header">
                                <h2 class="entry-title">10 Best Photo Apps For Incredible Iphone Photography (2020 Edition)</h2>
                            </header>
                            <div class="entry-content">
                                <p>How do you capture more interesting travel photos with your iPhone? How do you avoid taking the same cliché vacation photos that everyone else takes? I recently interviewed Steffen Geldner – a talented iPhone photographer with a passion for travel. In this article, Steffen reveals 7 tips for shooting beautiful travel photos that will preserve the amazing memories of your trip. Read on to discover how to take better travel photos with your iPhone!</p>
                                <p>
                                    <img class="aligncenter" src="./../../images/globes.jpg" srcset="./../../images/aws-cloud-large.png 1x, ./../../images/globes.jpg 2x">
                                </p>
                                <h2>1. Research Your Destination To Find The Best Photo Opportunities</h2>
                                <p>Before your trip, I recommend researching the destination to find the most interesting photo opportunities.</p>
                                <p>I always research the location I’m traveling to. I do this extensively and obsessively!</p>
                                <p>It’s up to you how much research you do. But you should definitely spend a bit of time looking up some great places to take pictures.</p>
                                <p>So, what kind of research can you do?</p>
                                <p>First, you could search for photos that other people have taken at the locations you’re planning to visit.</p>
                                <p>Search on Instagram or Google to get an idea of the kinds of photos people take there.</p>
                                <h2>2. Capture Your Journey To Tell The Complete Story Of Your Travels</h2>
                                <p>Travel photography isn’t just about photographing the destination.</p>
                                <p>For a more complete photographic story, capture your journey to and from the location you’re visiting.</p>
                                <p>If you’re traveling by plane, try to get a window seat where you have a view of the wing or propeller.</p>
                                <p>And of course, you could capture a beautiful aerial view of clouds, mountains, or city lights as you’re flying above.</p>
                                <p>Your journey will often involve several different types of transport. And they all offer great photo opportunities.</p>
                                <p>Whether you’re traveling by car, taxi, bus, train, boat, or plane, try to capture some interesting photos.</p>
                            </div>
                        </article>
                    </main>
                    <aside class="sidebar">
                        <section class="elements">
                            <button @click="openModal">Send Me The Tips</button>
                        </section>
                    </aside>
                </div>
            </div>
        </div>
        <div class="modal" :class="showModal">
            <div class="modal__background"></div>
            <div class="modal__inner">
                <div class="modal__close" @click="closeModal">&times;</div>
                <div class="modal__content">
                    <div class="modal__slider">Step 1 of 2</div>
                    <hr class="modal__slider__page">
                    <h2 class="modal__title">Enter your Email To Get <span class="green-text">FREE</span><br class="hide_767"> iPhone Photography Email Tips:</h2>
                    <form>
                        <div class="modal__email" :class="emailStatus">
                            <input type="text" class="modal__email-input" id="email-input" placeholder="Please enter your email here" v-model="email">
                            <label for="email-input" class="modal__email-input-label">Please enter your email here</label>
                            <label for="email-input" class="modal__email-input-label-error">Please enter a valid email address</label>
                            <button class="modal__submit" type="button" @click="validateEmail">Send Me The Tips »</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
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
    },
    computed:{
        showModal : function(){
            if(!this.modalOpen){
                return 'modal-hidden'
            }
            return ''
        },
        emailStatus: function(){
            if(this.email == ''){
                this.emailValidated = undefined;
                return ''
            }
            if(this.emailValidated === false){
                return 'error'
            }
            else{
                return ''
            }
        }
    }
}
</script>
<style lang='scss'>
    @import '../../styles/newblog.style.css'
</style>