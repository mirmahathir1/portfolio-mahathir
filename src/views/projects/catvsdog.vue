<template>
    <main id="main">

        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Project Details</h2>
                    <ol>
                        <li><a>Home</a></li>
                        <li>Dogs vs. Cats</li>
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
                                img-width="1024"
                                img-height="480"
                                :img-src="firebasePath(['projects','catvsdog',String(index-1)+'.png'])"
                        ></b-carousel-slide>

                    </b-carousel>

                    <div class="portfolio-info">
                        <h3>Project information</h3>
                        <ul>
                            <li><strong>Category</strong>: ML</li>
                            <li><strong>Name</strong>: Dogs vs. Cats</li>
                            <li><strong>Competition</strong>: Kaggle</li>
                            <!--                            <li><strong>Competition date</strong>: 18 August, 2020</li>-->
                        </ul>
                    </div>

                </div>

                <div class="portfolio-description ml-3">
                    <h2>Dogs vs. Cats</h2>
                    <p>
                        Building an ML model to classify whether images contain either a dog or a cat.
                    </p>
                    <div>
                        <h3>Details</h3>
                        <ul>
                            In this competition, I had to write an algorithm to classify whether images contain either a
                            dog or a cat.
                        </ul>
                        <h3>Relevant Tools and Languages</h3>
                        <ul>
                            <li>Python</li>
                            <li>Keras</li>
                            <li>Matplotlib</li>
                        </ul>
                        <h3>Links</h3>
                        <a href="https://www.kaggle.com/c/dogs-vs-cats">Click here to see the competition</a>
                        <a href="https://github.com/mirmahathir1/badhan">Click here to see
                            the git repository</a>
                    </div>
                </div>
            </div>
        </section><!-- End Portfolio Details Section -->

    </main><!-- End #main -->
</template>

<script>
    import {firebasePath} from "../../mixins/mixins";

    export default {
        name: "catvsdog",
        data: () => {
            return {
                firebasePath,
                numberOfImages: 7
            }
        }
    }
</script>

<style scoped>

</style>