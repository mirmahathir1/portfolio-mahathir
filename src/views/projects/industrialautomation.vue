<template>
    <main id="main">

        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Project Details</h2>
                    <ol>
                        <li><a>Home</a></li>
                        <li>Industrial Automation Challenge</li>
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
                                :img-src="firebasePath(['projects','industrialautomation',String(index-1)+'.png'])"
                        ></b-carousel-slide>

                    </b-carousel>

                    <div class="portfolio-info">
                        <h3>Project information</h3>
                        <ul>
                            <li><strong>Category</strong>: Hardware</li>
                            <li><strong>Name</strong>: Industrial Automation Challenge</li>
                            <li><strong>Organization</strong>: BUET Robotics Society</li>
                            <li><strong>Project date</strong>: 01 December, 2017</li>
                            <!--              <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>-->
                        </ul>
                    </div>

                </div>

                <div class="portfolio-description ml-3">
                    <h2>Winner of Industrial Automation Challenge 2017</h2>
                    <p>
                        We made a fully automated robotic hand that could detect and pick up light-weight boxes and sort them into three different categories according the shape that was printed on the boxes.
                    </p>
                    <div>
                        <h3>Details</h3>
                        <ul>
                            <li>The body is made out of PVC boards</li>
                            <li>Joints are made by 30Kg-cm Metal gear servo motors</li>
                            <li>A 1080p webcam for capturing live images for box detection</li>
                            <li>The actuators are controlled by an Arduino Uno</li>
                            <li>The arduino is controlled from Matlab</li>
                            <li>Whenever a white box of 10cm X 10cm X 10cm appears in front of the webcam, the arm detects and picks up the box automatically</li>
                            <li>The arm was configured to detect three shapes (circle, rectangle and triangle) on a single box and is configured to sort the boxes according to the detected shape</li>
                        </ul>
                        <h3>Teammates</h3>
                        <ul>
                            <li>Mir Sayeed Mohammad</li>
                            <li>Atiqur Rahman Shuvo</li>
                            <li>Sakib Chowdhury</li>
                            <li>Sazid Noor Rabi</li>
                            <!--              <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>-->
                        </ul>
                        <h3>Relevant Tools and Languages</h3>
                        <ul>
                            <li>Matlab</li>
                            <li>OpenCV</li>
                            <li>Arduino</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section><!-- End Portfolio Details Section -->

    </main><!-- End #main -->
</template>

<script>
    import {firebasePath} from "../../mixins/mixins";

    export default {
        name: "industrialautomation",
        data: () => {
            return {
                firebasePath,
                numberOfImages: 3
            }
        }
    }
</script>

<style scoped>

</style>