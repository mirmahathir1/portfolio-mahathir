<template>
    <main id="main">

        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Project Details</h2>
                    <ol>
                        <li><a>Home</a></li>
                        <li>Real or Not? NLP with Disaster Tweets</li>
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
                                :img-src="firebasePath(['projects','disastertweet',String(index-1)+'.png'])"
                        ></b-carousel-slide>

                    </b-carousel>

                    <div class="portfolio-info">
                        <h3>Project information</h3>
                        <ul>
                            <li><strong>Category</strong>: ML</li>
                            <li><strong>Name</strong>: Real or Not? NLP with Disaster Tweets</li>
                            <li><strong>Competition</strong>: Kaggle</li>
                        </ul>
                    </div>

                </div>

                <div class="portfolio-description ml-3">
                    <h2>Real or Not? NLP with Disaster Tweets</h2>
                    <p>
                        Building an ML model to predict which Tweets are about real disasters and which one’s aren’t
                    </p>
                    <div>
                        <h3>Relevant Tools and Languages</h3>
                        <ul>
                            <li>Python</li>
                            <li>Keras</li>
                            <li>Vue.js</li>
                            <li>Flask</li>
                            <li>Node.js</li>
                        </ul>
                        <h3>Links</h3>
                        <a href="https://www.kaggle.com/c/contradictory-my-dear-watson">Click here to see the competition</a>
                        <br>
                        <a href="https://drive.google.com/file/d/1aRWIepHrvVXxT341PI6TRVVbDGrLJGL2/view?usp=sharing">Click here to see my demo video</a>
                    </div>
                </div>
            </div>
        </section><!-- End Portfolio Details Section -->

    </main><!-- End #main -->
</template>

<script>
    import {firebasePath} from "../../mixins/mixins";

    export default {
        name: "disastertweet",
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