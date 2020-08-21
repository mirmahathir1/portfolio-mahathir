<template>
    <main id="main">

        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                    <h2>Project Details</h2>
                    <ol>
                        <li><a>Home</a></li>
                        <li>Traanchitro</li>
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
                                :img-src="firebasePath(['projects','traanchitro',String(index-1)+'.png'])"
                        ></b-carousel-slide>

                    </b-carousel>

                    <div class="portfolio-info">
                        <h3>Project information</h3>
                        <ul>
                            <li><strong>Category</strong>: Web</li>
                            <li><strong>Name</strong>: Traanchitro</li>
                            <li><strong>Organization</strong>: Shomonnoibd</li>
                            <li><strong>Project date</strong>: 5 May, 2020</li>
                            <li><strong>Project URL</strong>: <a href="https://www.traanchitro.com">https://www.traanchitro.com</a></li>
                        </ul>
                    </div>

                </div>

                <div class="portfolio-description ml-3">
                    <h2>Traanchitro</h2>
                    <p>
                        A platform for relief organization and distribution
                    </p>
                    <div>
                        <h3>Details</h3>
                        <ul>
                            <li>
                                বিশ্বব্যাপী ছড়িয়ে পড়া নভেল করোনা ভাইরাস মহামারি বাংলাদেশের মত উন্নয়নশীল দেশগুলোতে ত্রাণ বিতরণ কর্মসূচীগুলোর সমন্বয়ের প্রয়োজন আমাদেরকে নতুন ভাবে অনুধাবন করিয়েছে। সরকারি ত্রাণ বিতরণ কর্মসূচীগুলো অনেক পরিকল্পিত এবং সমন্বিত। কিন্তু এর বাইরেও বেসরকারী উদ্যোগে অনেক সংস্থা এবং ব্যক্তি নিজ নিজ এলাকায় ত্রাণ বিতরণ কর্মসূচী পালন করছেন। এসকল বেসরকারী উদ্যোগ গুলোর মাঝে সমন্বয়ের অভাব অনেক ক্ষেত্রেই ত্রান বিতরণে বৈষম্য তৈরী করছে। দেখা যাচ্ছে একাধিক সংস্থা বা ব্যক্তির উদ্যোগে একই জায়গায় একাধিকবার ত্রাণ পৌঁছে দেয়া হয়েছে আর অন্য অনেক জায়গাতেই একবারও ত্রাণ পৌঁছায়নি।
                                ত্রাণ বিতরণ কর্মসূচীগুলোর মাঝে সমন্বয় ঘটাতে তাই আমরা নিয়ে এসেছি আমাদের ওয়েব প্ল্যাটফর্ম <b>“ত্রাণচিত্র”</b>। ত্রাণচিত্র একটি স্বেচ্ছাসেবী উদ্যোগ। কিছু উদ্যমী স্বতন্ত্র স্বেচ্ছাসেবীর স্বতঃস্ফূর্ত অংশগ্রহণের মাধ্যমে এর সূচনা ঘটে। পরবর্তীতে এর পরিচালনার দায়িত্ব গ্রহণ করে <b>“সমন্বয় বাংলাদেশ”</b> সংগঠনটি।
                            </li>
                            <li>
                                আমাদের প্ল্যাটফর্মে আপনি যেসকল সুবিধা পাবেনঃ
                                <ul>
                                    <li>অংশগ্রহণকারী সকল ত্রাণ বিতরণকারী সংস্থার ত্রাণ কর্মসূচীর তথ্য ম্যাপের মাধ্যমে খুঁজতে পারবেন</li>
                                    <li>ম্যাপে বিভিন্ন ধরণের ত্রাণ কর্মসূচী নানা “ফিল্টার” এর মাধ্যমে বিভিন্ন ভাবে নিরীক্ষণ করতে পারবেন</li>
                                    <li>সরাসরি ত্রাণ বিতরণকারী সংস্থাগুলোর সাথে যোগাযোগ এর তথ্য পাবেন</li>
                                    <li>ত্রাণ বিতরণকারী সংস্থাগুলোর তহবিলে অনুদান প্রদানের জন্য প্রয়োজনীয় তথ্য পাবেন</li>
                                </ul>
                            </li>
                            <li>
                                ইতমধ্যেই আমরা আমাদের প্ল্যাটফর্মে বেশ কিছু সংস্থাকে অন্তর্ভুক্ত করেছি। এর পাশাপাশি আমরা আরও অনেক সংস্থাকে অন্তর্ভুক্ত করার কাজ চালিয়ে যাচ্ছি।
                            </li>
                        </ul>
                        <h3>Teammates</h3>
                        <ul>
                            <li>Aniruddha GS</li>
                            <li>Atiqur Rahman Shuvo</li>
                            <li>Priyeta Saha</li>
                            <li>Zunaed Karim Sifat</li>
                            <!--              <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>-->
                        </ul>
                        <h3>Relevant Tools and Languages</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Vue.js</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Vuetify</li>
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
        name: "traanchitro",
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