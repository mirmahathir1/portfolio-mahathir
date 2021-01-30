<template>
    <main id="main">

        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Project Details</h2>
                    <ol>
                        <li><a >Home</a></li>
                        <li>Notebook</li>
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
                                :img-src="firebasePath(['projects','notebook',String(index-1)+'.png'])"
                        ></b-carousel-slide>

                    </b-carousel>

                    <div class="portfolio-info">
                        <h3>Project information</h3>
                        <ul>
                            <li><strong>Category</strong>: Web</li>
                            <li><strong>Name</strong>: Notebook</li>
                            <li><strong>Organization</strong>: (None)</li>
                            <li><strong>Project date</strong>: 26 November, 2019</li>
                            <!--              <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>-->
                        </ul>
                    </div>

                </div>

                <div class="portfolio-description ml-3">
                    <h2>Notebook</h2>
                    <p>
                        A note-taking web app
                    </p>
                    <div>
                        <h3>Details</h3>
                        <ul>
                            <li>You have to create an account to start writing notes</li>
                            <li>You can create, review, update and delete your own notes</li>
                        </ul>
                        <h3>Teammates</h3>
                        <ul>
                            <li>Sumaiya Azad</li>
                            <!--              <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>-->
                        </ul>
                        <h3>Relevant Tools and Languages</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Vue.js</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                        </ul>
                        <h3>Video Presentation</h3>
                        <a href="https://drive.google.com/open?id=1X2u3PXHj-wfUBRdbATTSLo7QRpjFZU-z">Click here to see video presentation of the project</a>
                    </div>
                </div>
            </div>
        </section><!-- End Portfolio Details Section -->

    </main><!-- End #main -->
</template>

<script>
    import {firebasePath} from "../../mixins/mixins";

    export default {
        name: "nodevuenote",
        data: () => {
            return {
                firebasePath,
                numberOfImages: 5
            }
        }
    }
</script>

<style scoped>

</style>