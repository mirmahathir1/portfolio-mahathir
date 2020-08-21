<template>
    <main id="main">

        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Project Details</h2>
                    <ol>
                        <li><a>Home</a></li>
                        <li>Multiplayer Chess</li>
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
                                :img-src="firebasePath(['projects','chess',String(index-1)+'.png'])"
                        ></b-carousel-slide>

                    </b-carousel>

                    <div class="portfolio-info">
                        <h3>Project information</h3>
                        <ul>
                            <li><strong>Category</strong>: Software</li>
                            <li><strong>Name</strong>: Multiplayer Chess</li>
                            <li><strong>Organization</strong>: BUET</li>
                            <li><strong>Project date</strong>: 13 September, 2019</li>
                            <!--              <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>-->
                        </ul>
                    </div>

                </div>

                <div class="portfolio-description ml-3">
                    <h2>Multiplayer Chess</h2>
                    <p>
                        A multiplayer chess game built using Java
                    </p>
                    <div>
                        <h3>Details</h3>
                        <ul>
                            <li>This is our term project of Level 1 term 2 at BUET</li>
                            <li>You can create a live chess game, join with a awaiting competitor or watch a live chess
                                game as a spectator
                            </li>
                            <li>All the matches are saved in memory so that they can be watched later on.</li>
                            <li>All legal moves of a chess piece are shown on the board</li>
                            <li>The game ends whenever a checkmate occurs</li>
                            <li>There can be multiple matches on a single server at any time</li>
                        </ul>
                        <h3>Teammates</h3>
                        <ul>
                            <li>Md. Ashraful Islam</li>
                            <!--              <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>-->
                        </ul>
                        <h3>Relevant Tools and Languages</h3>
                        <ul>
                            <li>Java</li>
                            <li>JavaFX</li>
                        </ul>
                        <h3>Video Presentation</h3>
                        <a href="https://drive.google.com/open?id=1hjDgH2LE6EDmqSGK06m8ixA1OwIgjavV">Click here to see
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
        name: "chess",
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