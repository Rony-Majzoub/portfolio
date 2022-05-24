<template>
  <div class="grid grid-cols-10 col-start-2 col-end-[-2]">
    <BackButton />
    <ProjectTitle
      info="2022 - UI/UX & Web Design"
      title="Future Experience Lab"
      brief="Create and design a landing page for Future Experience Lab, a hybrid workshop for creativity." />
    <ProjectImage
      class="mb-10"
      image="fel_hero2.png"
      image-link="v1652949383/portfolio/fel/fel_hero2.png"
      alt-text="Future Experience Lab Icon"
      link-text="View Website"
      link="https://rony-majzoub-fel.netlify.app" />
    <ProjectTags
      client="Yrgo DD21, Future Experience Lab"
      team="Rony Majzoub, Juna Jakobsson, Marcus Hägerstrand, Nema Vinkeloe Uuskyla"
      role="UI/UX Designer"
      duration="2 weeks"
      tools="Figma"
      category1="UI Design"
      category2="UX Design"
      category3="Product Design"
      category4="Web Design" />
    <main class="grid col-span-full grid-cols-10 gap-y-8 lg:gap-y-16">
      <ColumnRight
        title="Background"
        description='When Future Experience Lab reached out to Yrgo, they sought after a website to augment their "Hybrid Workhop Experience", with a touch of "controlled chaos". Our goal was to strike that balance, and deliver a website prototype.' />
      <ColumnLeft
        title="The problem"
        description='The client had many ideas in mind when delivering their brief. Key points were "Controlled Chaos", "Hybrid Workshop" and "Place for Creativity." How could we deliver those feelings in a static website, with a tight deadline, punk aesthetic and an abstract brief?' />
      <ProjectImage
        image="fel_skiss.png"
        image-link="v1652994219/portfolio/fel/fel_skiss.png"
        alt-text="Future Experience Lab Sketches"
        description="The early desktop & mobile sketches for the main layout of the website." />
      <ProjectImage
        image="fel_greybox.png"
        image-link="v1652994219/portfolio/fel/fel_greybox.png"
        alt-text="Future Experience Lab Greyboxes"
        description="Digital greyboxes for how components, images & sections should be placed on the website." />
      <ColumnLeft
        title="The solution"
        description="The solution was a landing page that would showcase the projects and workshops that Future Experience Lab have contributed towards. The website was broken up into different sections to better communicate the different aspects of Future Experience Lab. A variety of images, illustrations and stylistic choices were used to create a chaotic feel, while also utilizing pre-defined grids and whitespace, to subconsciously organize that chaos." />
      <ProjectImage
        image="fel_moodboard.png"
        image-link="v1652994210/portfolio/fel/fel_moodboard.png"
        alt-text="Smoove Moodboard"
        description="This moodboard represents the feelings we strived to achieve on the final website." />
      <ColumnLeft
        title="Pre-planning"
        description="After being presented with the project brief, we tried to narrow down what exactly the goal of the website was. We also wanted to narrow down what the exact target group of this website was, and what they valued. We presented these questions to the client, and tried to shape the project around those key points.
        Early on, we created a Moodboard for visualizing how a chaotic, yet readable website might look like. We narrowed it down towards a dark color scheme, with strong and contrasting colors used wisely to grab attention. We also found that simple, primitive shapes could be used to add some dynamic flare into the website, which is something we added to the moodboard." />
      <ProjectImage
        image="fel_components.png"
        image-link="v1652996443/portfolio/fel/fel_components.png"
        alt-text="Components that were created for our Web Developers."
        description="The mobile & desktop components that we designed for our Web Developers." />
      <ProjectImage
        image="fel_stylesheet.png"
        image-link="v1653003599/portfolio/fel/fel_stylesheet.png"
        alt-text="Stylesheet created for our Web Developers."
        description="Our stylesheet that we applied throughout our entire project." />
      <ProjectImage
        image="fel_delivery.png"
        image-link="v1653003559/portfolio/fel/fel_delivery.png"
        alt-text="Our Review Process of 3D Images."
        description="Our delivery process of components, illustrations and layouts to our Web Developers." />
      <ColumnRight
        title="Our stylesheet"
        description="The final stylesheet has a focus on three key areas - fonts, colors and patterns. 
        When it comes to fonts, we decided on a heavy, punk-like font for all titles and headers, to contribute towards a more heavy feel. We also used a lighter font for all body text, that was more readable, which made the site feel more professional and controlled.
        
        For our brand colors, we chose three strong colors, with two additional text & background colors. 
        The green color was our main color, to be used on main elements, such as CTA-Buttons. 
        The orange color was our secondary color, which was used on certain elements that needed to stick out, but not to the degree of the main color. 
        The pink color was our tertiary color, often used on patterns and backgrounds to give off a more dynamic feel.

        Throughout the website, we also use a variety of primitive shapes as decorative backgrounds. These are used in conjunction with our brand colors, to give off a feeling of chaos, as well as spice up the background as a whole.
        " />
      <ColumnRight
        title="Designing for the Web"
        description="For this project, we teamed up with the Web Developer class at Yrgo, who were responsible for coding and implementing our designs to the web. That's why we had to carefully adapt our working schedule to accomodate agile development with our Web Developers.

        Our first method was to deliver sections one-by-one in a timely manner, with greyboxes and large visual elements coming first. With each passing day, we'd deliver other sections of the site, that they could implement in a modular manner. We'd also communicate if any changes to previous deliveries had been made.
        Our second method was to utilize Components and Color/Text Styles extensively in Figma, to better allow for reusable code in the final website. This drastically cut down the time needed to code the website, while also giving a more consistent design to the entire prototype." />
      <ProjectImage
        image="fel_prototype.png"
        image-link="v1653003373/portfolio/fel/fel_prototype.png"
        alt-text="Final Prototypes in Figma."
        description="Snapshots of our final Figma-prototypes." />
      <ColumnLeft
        title="Final prototypes"
        description="The final prototypes were made in Figma, with fine-tuned desktop and mobile variants. The prototypes were also made with a responsive layout in mind, both for larger and smaller screens. We provided multiple pages, assets and illustrations that were used in the final website. " />
      <ColumnLeft
        title="Learnings"
        description="We gained more experience on how to work under a tight deadline, and what to prioritize in those cases. We also gained better understanding for how Web Developers work, and their requirements.
        For future projects, we'd focus on getting more prep-time as designers, so we could deliver assets to our Web Developers immediately, instead of them having to wait without any tasks at hand. We'd also like to perform more extensive user testing, to further refine our design and layout, but the time constraints did not allow this.
        Overall, we were very satisfied with the project, and felt that there was a lot of potential if we were to continue with the project." />
    </main>
  </div>
</template>

<script>
import ProjectTags from "@/components/Project/ProjectTags.vue";
import ProjectTitle from "@/components/Project/ProjectTitle.vue";
import ColumnLeft from "@/components/Project/ColumnLeft.vue";
import ColumnRight from "@/components/Project/ColumnRight.vue";
import ProjectImage from "../components/Project/ProjectImage.vue";
import ProjectGallery from "../components/Project/ProjectGallery.vue";
import BackButton from "@/components/BackButton.vue";

export default {
  name: "FutureExperienceLab",
  components: {
    ProjectTags,
    ProjectTitle,
    ColumnLeft,
    ColumnRight,
    ProjectImage,
    ProjectGallery,
    BackButton,
  },
  // Send Gallery Array down to ProjectGallery component for dynamic images.
  provide() {
    // use function syntax so that we can access `this`
    return {
      pictures: this.pictures,
    };
  },
  // Data-list of images to be shown in ProjectGallery.
  data() {
    return {
      pictures: [
        {
          url: "v1652044734/portfolio/smoove/smoove_road.jpg",
          alt: "Motorcycle driving down a long road, at sunset.",
          src: "smoove.jpg",
        },
        {
          url: "v1652863280/portfolio/smoove/smoove_helmet.png",
          alt: "A motorcycle helmet placed on a road.",
          src: "smoove_helmet.png",
        },
        {
          url: "v1652863281/portfolio/smoove/smoove_studio.png",
          alt: "A glowing motorcycle parked inside a studio.",
          src: "smoove_studio.png",
        },
        {
          url: "v1652863280/portfolio/smoove/smoove_watch.png",
          alt: "A digital watch hanging from a motorcycle handle.",
          src: "smoove_watch.png",
        },
        {
          url: "v1652863376/portfolio/smoove/smoove_wheel.png",
          alt: "A close-up picture of a motorcycle wheel arch.",
          src: "smoove_wheel.png",
        },
        {
          url: "v1652863280/portfolio/smoove/smoove_field.png",
          alt: "A motorcycle and a driver parked in an open field.",
          src: "smoove_field.png",
        },
      ],
    };
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#212121");
    document
      .querySelector("header")
      .setAttribute(
        "style",
        "background: radial-gradient( rgba(0,0,0,0) 1px,#212121 1px ) 0px 0px/8px 8px"
      );
    document
      .querySelector(".page-footer")
      .setAttribute("style", "background: #212121");
  },
  beforeUnmount() {
    document.querySelector("body").setAttribute("style", "");
    document.querySelector("header").setAttribute("style", "");
    document.querySelector(".page-footer").setAttribute("style", "");
  },
};
</script>
