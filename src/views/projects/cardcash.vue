<template>
    <main id="main">

        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Project Details</h2>
                    <ol>
                        <li><a>Home</a></li>
                        <li>Card Cash</li>
                    </ol>
                </div>

            </div>
        </section><!-- End Breadcrumbs -->

        <!-- ======= Portfolio Details Section ======= -->
        <section id="portfolio-details" class="portfolio-details">
            <div class="container">

                <div class="portfolio-details-container">

                    <b-carousel
                            id="carousel-fade"
                            style="text-shadow: 0px 0px 2px #000"
                            fade
                            indicators
                            img-width="1024"
                            img-height="480"
                            :interval="3000"
                    >
                        <b-carousel-slide
                                v-for="index in numberOfImages" :key="index"
                                :img-src="firebasePath(['projects','cardcash',String(index-1)+'.png'])"
                        ></b-carousel-slide>

                    </b-carousel>

                    <div class="portfolio-info">
                        <h3>Project information</h3>
                        <ul>
                            <li><strong>Category</strong>: Hardware</li>
                            <li><strong>Name</strong>: Card Cash</li>
                            <li><strong>Organization</strong>: BUET</li>
                            <li><strong>Project date</strong>: 20 September, 2019</li>
                            <!--              <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>-->
                        </ul>
                    </div>

                </div>

                <div class="portfolio-description ml-3">
                    <h2>Card Cash</h2>
                    <p>
                        A card based digital monetary system
                    </p>
                    <div>
                        <h3>Card Cash</h3>
                        <ul>
                            <li>We had implemented a card based digital monetary system for our microcontroller project of Level 3 term 2 at BUET.
                            <li>Here we have used an ATmega32A micro controller as our processing unit</li>
                            <li>ESP8266 Nodemcu v2 as wi-fi module for communicating with the remote java server</li>
                            <li>An RC-522 RFID module for reading from an RFID card.</li>
                            <li>We have also used a 20x4 LCD module for showing prompts</li>
                            <li>All the inputs are given via a 4x4 keypad.</li>
                        </ul>
                        <h3>Teammates</h3>
                        <ul>
                            <li>Md. Ashraful Islam</li>
                            <li>Nafid Ajmain Enan</li>
                            <!--              <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>-->
                        </ul>
                        <h3>Relevant Tools and Languages</h3>
                        <ul>
                            <li>Nodemcu</li>
                            <li>Atmega32A</li>
                            <li>Java</li>
                            <li>RFID card reader</li>
                        </ul>
                        <h3>Video Presentation</h3>
                        <a href="https://www.youtube.com/watch?v=UDES4hRFCLg&feature=share&fbclid=IwAR0kLXHuhao392hGDddzEOZVzPFXk6JxN8BKYp_iB0tf3gSi6b51rbUAmv8">Click here to see video presentation of the project</a>
                    </div>
                </div>
            </div>
        </section><!-- End Portfolio Details Section -->

    </main><!-- End #main -->
</template>

<script>
    import {firebasePath} from "../../mixins/mixins";

    export default {
        name: "cardcash",
        data: () => {
            return {
                firebasePath,
                numberOfImages: 4
            }
        }
    }
</script>

<style scoped>

</style>