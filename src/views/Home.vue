<template>
    <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            :clipped="false"
            app
            dark
            color="#040B14"

        >
            <v-list>
                <v-list-item class="px-2">
                    <v-list-item-avatar size="80">
                        <v-img
                            src="https://firebasestorage.googleapis.com/v0/b/portfolio-mahathir.appspot.com/o/profile-img.jpg?alt=media&token=40d57d20-5036-407e-9979-a1a7c7efc384"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="title">Mir Mahathir <br>Mohammad</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-btn color="#222222" dark small fab class="mr-1" v-for="(site,index) in [
                        {name:'twitter',link:'https://twitter.com/Mahathir111'},
                        {name:'linkedin',link:'https://www.linkedin.com/in/mir-mahathir-59bb671a5/'},
                        {name:'facebook',link:'https://www.facebook.com/MirMahathirMohammad'},
                        {name:'instagram',link:'https://www.instagram.com/mirmahathir/'},
                        {name:'git',link:'https://github.com/mirmahathir1'}
                        ]"
                           @click="goToSite(site.link)"
                           :key="index">
                        <v-icon>mdi-{{ site.name }}</v-icon>
                    </v-btn>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list dense>
                <template v-for="item in items">
                    <v-list-item
                        :key="item.text"
                        link
                        @click="goToSection(item.to)"
                    >
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            color="rgba(4, 11, 20, 0.5)"
            dark
            fixed
            :hide-on-scroll="true"
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        </v-app-bar>


        <v-main>


            <!-- ======= Hero Section ======= -->
            <section id="hero" ref="hero" class="d-flex flex-column justify-content-center align-items-center">
                <div class="hero-container" data-aos="fade-in" style="padding: 10px">
                    <h1 style="margin: 0 0 10px 0;font-size: 40px;font-weight: 700;line-height: 56px;color: #fff;">
                        Mir Mahathir Mohammad
                    </h1>
                    <p style="color: #fff;margin-bottom: 30px;font-size: 26px;font-family: 'Poppins', sans-serif;">
                        Frontend Developer, UX designer, ML apprentice
                    </p>
                </div>
            </section><!-- End Hero -->


            <main id="main">
                <section id="about" class="about" ref="about">
                    <div class="container">
                        <div class="section-title">
                            <h2>About</h2>
                            <p>Hi, welcome to my personal cabinet. I'm Mir Mahathir Mohammad and I'm currently studying
                                at
                                Bangladesh University of Engineering and Technology. To know more about me, just scroll
                                down and see
                                :p</p>
                        </div>

                        <div class="row">
                            <div class="col-lg-4" data-aos="fade-right">
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-mahathir.appspot.com/o/profile-img.jpg?alt=media&token=40d57d20-5036-407e-9979-a1a7c7efc384"
                                    class="img-fluid" alt="">
                            </div>
                            <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <h3>Frontend web developer &amp; UX designer.</h3>
                                <p class="font-italic">
                                    I have been always keen and fascinated on frontend development wayy before I started
                                    my varsity
                                    life and apart from doing practice projects,
                                    I really gave a big amount of time in developing frontends for my academic projects
                                    and some
                                    voluntary projects. Currently I am studying machine
                                    learning and deep learning.
                                </p>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <ul>
                                            <li><i class="icofont-rounded-right"></i> <strong>Birthday:</strong> 2 Aug
                                                1999
                                            </li>
                                            <li><i class="icofont-rounded-right"></i> <strong>Website:</strong>
                                                www.mirmahathir.me
                                            </li>
                                            <li><i class="icofont-rounded-right"></i> <strong>Phone:</strong>
                                                +8801521438557
                                            </li>
                                            <li><i class="icofont-rounded-right"></i> <strong>City:</strong> Dhaka,
                                                Bangladesh
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6">
                                        <ul>
                                            <li><i class="icofont-rounded-right"></i> <strong>Age:</strong>
                                                {{ new Date().getFullYear() - 1999 }}
                                            </li>
                                            <!--                                <li><i class="icofont-rounded-right"></i> <strong>Degree:</strong> BSc.</li>-->
                                            <li><i class="icofont-rounded-right"></i> <strong>Email:</strong>
                                                mirmahathir1@gmail.com
                                            </li>
                                            <li><i class="icofont-rounded-right"></i> <strong>Freelance:</strong>Not
                                                Available
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                    I am currently focusing on deep learning and machine learning. Convolutional neural
                                    networks,
                                    deep neural networks and recurrent neural networks
                                    are parts of my current study and research
                                </p>
                            </div>
                        </div>

                    </div>
                </section><!-- End About Section -->

                <!-- ======= Facts Section ======= -->
                <section id="facts" class="facts" ref="facts">
                    <div class="container">

                        <div class="section-title">
                            <h2>Facts</h2>
                            <p>Till now, I had been doing term projects and voluntary projects. Here's my current
                                statistics on
                                projects I finished</p>
                        </div>

                        <div class="row no-gutters">

                            <!--                            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">-->
                            <!--                                <div class="count-box">-->
                            <!--                                    <i class="icofont-simple-smile"></i>-->
                            <!--                                    <span data-toggle="counter-up">1</span>-->
                            <!--                                    <p><strong>Happy Girlfriend</strong> who cares for me very much</p>-->
                            <!--                                </div>-->
                            <!--                            </div>-->

                            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                                <div class="count-box">
                                    <i class="icofont-document-folder"></i>
                                    <span data-toggle="counter-up">11</span>
                                    <p><strong>Web Projects</strong> academic, voluntary and competitive</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                                <div class="count-box">
                                    <i class="icofont-atom"></i>
                                    <span data-toggle="counter-up">2</span>
                                    <p><strong>Data Science Competitions</strong></p>
                                </div>
                            </div>


                        </div>

                    </div>
                </section><!-- End Facts Section -->

                <!-- ======= Skills Section ======= -->
                <section id="skills" ref="skills" class="skills section-bg">
                    <div class="container">
                        <div class="section-title">
                            <h2>Skills</h2>
                            <p>I really love to expand my bucket list as well as completing them as well. Here's
                                a list of what I have in my brain right now:( </p>
                        </div>
                        <div class="row">
                            <b-card class="col-lg-6" data-aos="fade-up" v-for="(sector,index) in sectors" :key="index">
                                <b-card-title>
                                    {{ sector.sectorName }}
                                </b-card-title>
                                <div v-for="(skill,index) in sector.skills.slice(0,3)" :key="index" data-aos="fade-right">
                                    <b class="mt-5">{{ skill.name }}</b>

                                    <b style="float: right">{{ skill.value }}%</b>
                                    <v-progress-linear
                                        class="mt-4 mb-4"
                                        color="blue"
                                        buffer-value="0"
                                        striped
                                        height="10"
                                        :value="skill.value"
                                        stream
                                    ></v-progress-linear>
                                </div>


                                <template v-if="sector.skills.length>3">
                                    <b-button variant="link" v-b-toggle="'collapse-'+index" class="m-1">See More
                                    </b-button>

                                    <b-collapse :id="'collapse-'+index">
                                        <div v-for="(skill,index) in sector.skills.slice(3,sector.skills.length)" :key="index"
                                             data-aos="fade-right">
                                            <b class="mt-5">{{ skill.name }}</b>

                                            <b style="float: right">{{ skill.value }}%</b>
                                            <v-progress-linear
                                                class="mt-4 mb-4"
                                                color="blue"
                                                buffer-value="0"
                                                striped
                                                height="10"
                                                :value="skill.value"
                                                stream
                                            ></v-progress-linear>
                                        </div>
                                    </b-collapse>
                                </template>

                            </b-card>
                        </div>
                    </div>
                </section><!-- End Skills Section -->

                <!-- ======= Resume Section ======= -->
                <section id="resume" ref="resume" class="resume">
                    <div class="container">

                        <div class="section-title">
                            <h2>Resume</h2>
                            <p>Section under maintenance</p>
                        </div>

                    </div>
                </section><!-- End Resume Section -->


                <!-- ======= Portfolio Section ======= -->
                <section id="portfolio" ref="portfolio" class="portfolio section-bg ico">
                    <div class="container">

                        <div class="section-title">
                            <h2>Portfolio</h2>
                            <p>A brief description of all of my shareable projects is available below!</p>
                        </div>

                        <v-row align="center" justify="center" data-aos="fade-up">
                            <v-btn-toggle
                                v-model="toggle_exclusive"
                                rounded
                            >
                                <v-btn>
                                    <b>All</b>
                                </v-btn>
                                <v-btn>
                                    <b>Hardware</b>
                                </v-btn>
                                <v-btn>
                                    <b>Web</b>
                                </v-btn>
                                <v-btn>
                                    <b>App</b>
                                </v-btn>
                            </v-btn-toggle>
                        </v-row>

                        <v-row>
                            <v-col cols="12" lg="12">
                                <v-card flat>
                                    <v-container fluid>
                                        <v-row>
                                            <v-col
                                                v-for="(project,index) in projects"
                                                v-if="project.type===toggle_exclusive || toggle_exclusive===0"
                                                data-aos="fade-up"
                                                :key="index"
                                                class="d-flex child-flex"
                                                cols="12"
                                                lg="4"
                                            >
                                                <v-card tile class="mx-auto"
                                                        max-width="344">
                                                    <v-img
                                                        :src="firebasePath(['projects',project.path,'0.png'])"
                                                        aspect-ratio="1.5"
                                                        class="grey lighten-2 white--text align-end"

                                                    >
                                                        <template v-slot:placeholder>
                                                            <v-row
                                                                class="fill-height ma-0"
                                                                align="center"
                                                                justify="center"
                                                            >
                                                                <v-progress-circular indeterminate
                                                                                     color="grey lighten-5"></v-progress-circular>
                                                            </v-row>
                                                        </template>
                                                    </v-img>
                                                    <v-card-title style="word-break: normal;">
                                                        {{ project.name }}
                                                    </v-card-title>
                                                    <v-card-actions>
                                                        <v-btn text color="blue"
                                                               @click="$router.push('project/'+project.path)">
                                                            See Project
                                                        </v-btn>
                                                    </v-card-actions>

                                                </v-card>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card>
                            </v-col>
                        </v-row>

                        <section id="mlportfolio" ref="mlportfolio" class="portfolio section-bg">
                            <div class="container">
                                <div class="section-title">
                                    <h2>Machine Learning Models</h2>
                                    <p>A brief description of the several machine learning models I have worked on:</p>
                                </div>

                                <v-row align="center" justify="center" data-aos="fade-up">
                                    <v-btn-toggle
                                        v-model="toggle_ml"
                                        rounded
                                    >
                                        <v-btn small>
                                            <b>All</b>
                                        </v-btn>
                                        <v-btn small>
                                            <b>Competition</b>
                                        </v-btn>
                                        <v-btn small>
                                            <b>Practice</b>
                                        </v-btn>
                                        <!--                                        <v-btn small>-->
                                        <!--                                            <b>Research</b>-->
                                        <!--                                        </v-btn>-->
                                        <!--                                <v-btn>-->
                                        <!--                                    <b>App</b>-->
                                        <!--                                </v-btn>-->
                                    </v-btn-toggle>
                                </v-row>

                                <v-row>
                                    <v-col cols="12" lg="12">
                                        <v-card flat>
                                            <v-container fluid>
                                                <v-row>
                                                    <v-col
                                                        v-for="(project,index) in mlprojects"
                                                        v-if="project.type===toggle_ml || toggle_ml===0"
                                                        data-aos="fade-up"
                                                        :key="index"
                                                        class="d-flex child-flex"
                                                        cols="12"
                                                        lg="4"
                                                    >
                                                        <v-card tile class="mx-auto"
                                                                max-width="344">
                                                            <v-img
                                                                :src="firebasePath(['projects',project.path,'0.png'])"
                                                                aspect-ratio="1.5"
                                                                class="grey lighten-2 white--text align-end"

                                                            >
                                                                <!--                                                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"-->
                                                                <template v-slot:placeholder>
                                                                    <v-row
                                                                        class="fill-height ma-0"
                                                                        align="center"
                                                                        justify="center"
                                                                    >
                                                                        <v-progress-circular indeterminate
                                                                                             color="grey lighten-5"></v-progress-circular>
                                                                    </v-row>
                                                                </template>
                                                            </v-img>
                                                            <v-card-title style="word-break: normal;">
                                                                {{ project.name }}
                                                            </v-card-title>
                                                            <v-card-actions>
                                                                <v-btn text color="blue"
                                                                       @click="$router.push('project/'+project.path)">
                                                                    See Project
                                                                </v-btn>
                                                            </v-card-actions>

                                                        </v-card>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </div>
                        </section>
                    </div>
                </section><!-- End Portfolio Section -->

                <!-- ======= Services Section ======= -->
                <section id="hobbies" ref="hobbies" class="services">
                    <div class="container">

                        <div class="section-title">
                            <h2>Hobbies</h2>
                            <p>Section Under maintenance</p>
                        </div>

                    </div>
                </section><!-- End Services Section -->

                <!-- ======= Contact Section ======= -->
                <section id="contact" class="contact">

                    <div class="container">
                        <div class="section-title">
                            <h2>Contact</h2>
                            <p>I'm currently living in Dhaka, the crowded capital of Bangladesh. And my varsity is just
                                within walking-distance from where I live :3 </p>
                        </div>

                        <div class="row" data-aos="fade-in">

                            <div class="col-lg-5 d-flex align-items-stretch">
                                <v-card class="pa-10">
                                    <div class="address">
                                        <i class="icofont-google-map"></i>
                                        <h4>Location:</h4>
                                        <p>Shefaly Garden, flat-4B, 33/3, Azimpur road, Dhaka- 1205 </p>
                                    </div>

                                    <div class="email">
                                        <i class="icofont-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>mirmahathir1@gmail.com</p>
                                    </div>

                                    <div class="phone">
                                        <i class="icofont-phone"></i>
                                        <h4>Call:</h4>
                                        <p>+8801521438557</p>
                                    </div>
                                </v-card>
                            </div>
                        </div>
                    </div>
                </section><!-- End Contact Section -->
            </main>

        </v-main>
    </v-app>


</template>

<script>
import {firebasePath} from "../mixins/mixins";

export default {
    props: {
        source: String,
    },
    methods: {
        goToSection(to) {
            this.$vuetify.goTo('#' + to);
            if (this.isMobile()) {
                this.drawer = false;
            }
        },
        goToSite(to) {
            window.open(to);
        },
        isMobile() {
            let check = false;
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        }
    },
    data: () => ({
        firebasePath,

        toggle_exclusive: 0,
        toggle_ml: 0,

        drawer: null,
        items: [
            {icon: 'mdi-home', text: 'Home', to: 'hero'},
            {icon: 'mdi-account', text: 'About', to: 'about'},
            {icon: 'mdi-note', text: 'Resume', to: 'resume'},
            {icon: 'mdi-newspaper', text: 'Portfolio', to: 'portfolio'},
            {icon: 'mdi-soccer', text: 'Hobbies', to: 'hobbies'},
            {icon: 'mdi-email', text: 'Contact', to: 'contact'},
        ],
        sectors: [
            {
                sectorName: "Programming Languages",
                skills: [
                    {name: "JavaScript", value: 100},
                    {name: "Java", value: 80},
                    {name: "Python", value: 40},
                    {name: "PHP", value: 80},
                    {name: "LaTeX", value: 60},
                    {name: "C++", value: 60},
                    {name: "SQL", value: 80}
                ]
            },
            {
                sectorName: "Web development",
                skills: [
                    {name: "Vue.js", value: 100},
                    {name: "Node.js", value: 80},
                    {name: "Django", value: 40},
                    {name: "jQuery", value: 20},
                    {name: "React.js", value: 40}
                ]
            },
            {
                sectorName: "Machine learning",
                skills: [
                    {name: "DNN", value: 40},
                    {name: "RNN", value: 60},
                    {name: "CNN", value: 40}
                ]
            },
            {
                sectorName: "Machine Learning Frameworks",
                skills: [
                    {name: "Keras", value: 60},
                    {name: "Tensorflow", value: 40},
                    {name: "PyTorch", value: 20}
                ]
            },
            {
                sectorName: "Database",
                skills: [
                    {name: "PostgreSQL", value: 80},
                    {name: "Oracle 11g", value: 60},
                    {name: "MongoDB", value: 20},
                    {name: "MySQL", value: 20},

                ]
            },
            {
                sectorName: "Mobile App Development",
                skills: [
                    {name: "Native Java", value: 20},
                    {name: "Capacitor", value: 20},
                    {name: "React Native", value: 40},
                ]
            },
            {
                sectorName: "Misc",
                skills: [
                    {name: "Docker", value: 40},
                    {name: "Arduino", value: 40},
                    {name: "JavaFX", value: 80},

                ]
            }
        ],
        projects: [
            {name: 'Badhan Website and Android App', path: 'badhan', type: 2},
            {name: 'Multiplayer Chess', path: 'chess', type: 3},
            {name: 'Industrial Automation Challenge', path: 'industrialautomation', type: 1},
            {name: 'Card Cash', path: 'cardcash', type: 1},
            {name: 'Node Vue Note', path: 'nodevuenote', type: 2},
            {name: 'PicUp', path: 'picup', type: 2},
            {name: 'Traanchitro', path: 'traanchitro', type: 2}
        ],
        mlprojects: [
            {name: 'Global Wheat Detection', path: 'wheat', type: 1},
            {name: 'Melanoma Classification', path: 'melanoma', type: 1},
            {name: 'Cat vs Dog', path: 'catvsdog', type: 2},
            {name: 'Contradictory, My Dear Watson', path: 'contradictory', type: 2},
            {name: 'Real or Not? NLP with Disaster Tweets', path: 'disastertweet', type: 2},
            {name: 'Dog Breed Identification', path: 'dogbreed', type: 2},
            {name: 'Facial Keypoint Detection', path: 'facialkeypoint', type: 2},
            {name: 'House Prices', path: 'houseprice', type: 2},
        ],
    }),
    beforeRouteEnter(to, from, next) {
        if (from.name === 'Project') {
            next(vm => {
                vm.$vuetify.goTo('#portfolio');
            });
        } else {
            next();
        }
    }
}
</script>
<style>
@import "../assets/css/main.css";


</style>