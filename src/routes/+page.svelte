<script lang="ts">
    import profileImg from '../lib/images/personal_photo.jpg'
    import Header from "./Header.svelte";
    import SlidingInfo from "./SlidingInfo.svelte";
</script>

<Header></Header>

<main>
    <div class="div_personal_info row">
        <img id="sImage" src={profileImg} height="600" width="360" alt="">
        <div class="div_about">
            <div class="column_flex center_vertically_div_about">
                <SlidingInfo></SlidingInfo>
            </div>
        </div>
    </div>
</main>

<style>
    .div_personal_info {
        position: relative;
        top: 0;
        width: 100%;
        padding-top: 105px;
        display: flex;
        flex-direction: row;
    }

    .div_personal_info .div_about {
        width: 100%;
        padding-left: 32px;
    }

    .center_vertically_div_about {
        position: relative;
        top: 15%
    }
</style>
