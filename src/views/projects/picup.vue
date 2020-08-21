<template>
    <main id="main">

        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Project Details</h2>
                    <ol>
                        <li><a>Home</a></li>
                        <li>PicUp</li>
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
                                :img-src="firebasePath(['projects','picup',String(index-1)+'.png'])"
                        ></b-carousel-slide>

                    </b-carousel>

                    <div class="portfolio-info">
                        <h3>Project information</h3>
                        <ul>
                            <li><strong>Category</strong>: Web</li>
                            <li><strong>Name</strong>: PicUp</li>
                            <li><strong>Organization</strong>: BUET</li>
                            <li><strong>Project date</strong>: 10 October, 2019</li>
                            <!--              <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>-->
                        </ul>
                    </div>

                </div>

                <div class="portfolio-description ml-3">
                    <h2>PicUp</h2>
                    <p>
                        A social media site for uploading, storing, posting photos.
                    </p>
                    <div>
                        <h3>Details</h3>
                        <ul>
                            <li>This is our database project of Level 2 term 2 at BUET</li>
                            <li>You can create an account; post photos with captions and tags; like and comment on any photo</li>
                            <li>You may create groups and people can join and see the photos of that group</li>
                            <li>A personal photo storage is available for you to store photos</li>
                            <li>People, groups and photos can be searched from the search bar </li>
                            <li>You can send, accept and reject friend requests</li>
                            <li>A user will become a star-user if he/she is frequently active on this platform</li>
                        </ul>
                        <h3>Teammates</h3>
                        <ul>
                            <li>Md. Ashraful Islam</li>
                            <!--              <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>-->
                        </ul>
                        <h3>Relevant Tools and Languages</h3>
                        <ul>
                            <li>PHP</li>
                            <li>PostgreSQL</li>
                        </ul>
                        <h3>Video Presentation</h3>
                        <a href="https://drive.google.com/open?id=119b3nOFnoKycU4kbdKEWTrseW02yiEWR">Click here to see video presentation of the project</a>
                    </div>
                </div>
            </div>
        </section><!-- End Portfolio Details Section -->

    </main><!-- End #main -->
</template>

<script>
    import {firebasePath} from "../../mixins/mixins";

    export default {
        name: "picup",
        data: () => {
            return {
                firebasePath,
                numberOfImages: 10
            }
        }
    }
</script>

<style scoped>

</style>