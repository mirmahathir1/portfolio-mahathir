<template>
    <main id="main">

        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Project Details</h2>
                    <ol>
                        <li><a>Home</a></li>
                        <li>Global Wheat Detection</li>
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
                                :img-src="firebasePath(['projects','wheat',String(index-1)+'.png'])"
                        ></b-carousel-slide>

                    </b-carousel>

                    <div class="portfolio-info">
                        <h3>Project information</h3>
                        <ul>
                            <li><strong>Category</strong>: ML</li>
                            <li><strong>Name</strong>: Global Wheat Detection</li>
                            <li><strong>Competition</strong>: Kaggle</li>
                            <li><strong>Competition date</strong>: 19 August, 2020</li>
                        </ul>
                    </div>

                </div>

                <div class="portfolio-description ml-3">
                    <h2>Global Wheat Detection</h2>
                    <p>
                        Building an ML model to predict wheat heads in images of wheat.
                    </p>
                    <div>
                        <h3>Details</h3>
                        <ul>
                            In this competition, I had to detect wheat heads from outdoor images of wheat plants, including wheat datasets from around the globe. The problem focuses on a generalized solution to estimate the number and size of wheat heads.
                        </ul>
                        <h3>Teammates</h3>
                        <ul>
                            <li>Sumaiya Azad</li>
                            <!--              <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>-->
                        </ul>
                        <h3>Relevant Tools and Languages</h3>
                        <ul>
                            <li>Python</li>
                            <li>Keras</li>
                            <li>OpenCV</li>
                        </ul>
                        <h3>Links</h3>
                        <a href="https://www.kaggle.com/c/global-wheat-detection/overview">Click here to see the competition</a>

                    </div>
                </div>
            </div>
        </section><!-- End Portfolio Details Section -->

    </main><!-- End #main -->
</template>

<script>
    import {firebasePath} from "../../mixins/mixins";

    export default {
        name: "wheat",
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