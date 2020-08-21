<template>
    <main id="main">

        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Project Details</h2>
                    <ol>
                        <li><a>Home</a></li>
                        <li>Facial Keypoints Detection</li>
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
                                :img-src="firebasePath(['projects','facialkeypoint',String(index-1)+'.png'])"
                        ></b-carousel-slide>
                    </b-carousel>

                    <div class="portfolio-info">
                        <h3>Project information</h3>
                        <ul>
                            <li><strong>Category</strong>: ML</li>
                            <li><strong>Name</strong>: Facial Keypoints Detection</li>
                            <li><strong>Competition</strong>: Kaggle</li>
                        </ul>
                    </div>

                </div>

                <div class="portfolio-description ml-3">
                    <h2>Facial Keypoints Detection</h2>
                    <p>
                        Building an ML model to predict keypoint positions on face images such as left_eye_center, right_eye_center, left_eye_inner_corner, left_eye_outer_corner, right_eye_inner_corner, right_eye_outer_corner, left_eyebrow_inner_end, left_eyebrow_outer_end, right_eyebrow_inner_end, right_eyebrow_outer_end, nose_tip, mouth_left_corner, mouth_right_corner, mouth_center_top_lip, mouth_center_bottom_lip
                    </p>
                    <div>
                        <h3>Relevant Tools and Languages</h3>
                        <ul>
                            <li>Python</li>
                            <li>Keras</li>
                        </ul>
                        <h3>Links</h3>
                        <a href="https://www.kaggle.com/c/facial-keypoints-detection">Click here to see the competition</a>
                    </div>
                </div>
            </div>
        </section><!-- End Portfolio Details Section -->

    </main><!-- End #main -->
</template>

<script>
    import {firebasePath} from "../../mixins/mixins";

    export default {
        name: "facialkeypoint",
        data: () => {
            return {
                firebasePath,
                numberOfImages: 2
            }
        }
    }
</script>

<style scoped>

</style>