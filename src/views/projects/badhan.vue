<template>
    <main id="main">

        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Project Details</h2>
                    <ol>
                        <li><a>Home</a></li>
                        <li>Badhan Website and Android App</li>
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
                                :img-src="firebasePath(['projects','badhan',String(index-1)+'.png'])"
                        ></b-carousel-slide>

                    </b-carousel>

                    <div class="portfolio-info">
                        <h3>Project information</h3>
                        <ul>
                            <li><strong>Category</strong>: Web, Android</li>
                            <li><strong>Name</strong>: Badhan Website and Android App</li>
                            <li><strong>Organization</strong>: Badhan</li>
                            <li><strong>Project date</strong>: 23 March, 2020</li>
                            <li><strong>Project URL</strong>: <a href="https://badhanweb.github.io/badhan/start.html">Click
                                here</a></li>
                            <!--              <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>-->
                        </ul>
                    </div>

                </div>

                <div class="portfolio-description ml-3">
                    <h2>Badhan Website and Android App</h2>
                    <p>
                        This is the website of Badhan, a voluntary blood donation platform of BUET.
                    </p>
                    <div>
                        <h3>Teammates</h3>
                        <ul>
                            <li>Aniruddha GS</li>
                            <li>Anisha Islam</li>
                            <li>Priyeta Saha</li>
                        </ul>
                        <h3>Relevant Tools and Languages</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Vue.js</li>
                            <li>Express</li>
                            <li>Bootstrap4</li>
                            <li>MongoDB</li>
                        </ul>
                        <h3>Video Presentation</h3>
                        <a href="https://drive.google.com/open?id=1zMNNCCzdcJzYAwt0RksCreUYR5wFJcJT">Click here to see
                            video presentation of the project</a>
                    </div>
                </div>
            </div>
        </section><!-- End Portfolio Details Section -->

    </main><!-- End #main -->
</template>

<script>
    import {firebasePath} from "../../mixins/mixins";
    export default {
        name: "badhan",
        data: () => {
            return {
                firebasePath,
                numberOfImages: 6
            }
        }
    }
</script>

<style scoped>

</style>