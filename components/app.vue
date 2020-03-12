<template>
    <div class="uk-container">
        <h1 class="uk-heading-large">Welcome!</h1>

        <p>Message: {{ message }}</p>


        <a href="#modal-example" uk-toggle>Open modal</a>

        <!-- This is the modal -->
        <div id="modal-example" uk-modal>
            <div class="uk-modal-dialog uk-modal-body">
                <h2 class="uk-modal-title">Headline</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p class="uk-text-right">
                    <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                    <button class="uk-button uk-button-primary" type="button">Save</button>
                </p>
            </div>
        </div>

        <div class="uk-grid-small uk-child-width-auto" uk-grid uk-countdown="date: 2021-01-01T00:00:01+00:00">
        <div>
            <div class="uk-countdown-number uk-countdown-days"></div>
            <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Days</div>
        </div>
        <div class="uk-countdown-separator">:</div>
        <div>
            <div class="uk-countdown-number uk-countdown-hours"></div>
            <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Hours</div>
        </div>
        <div class="uk-countdown-separator">:</div>
        <div>
            <div class="uk-countdown-number uk-countdown-minutes"></div>
            <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Minutes</div>
        </div>
        <div class="uk-countdown-separator">:</div>
        <div>
            <div class="uk-countdown-number uk-countdown-seconds"></div>
            <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Seconds</div>
        </div>
</div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data: function() {
            return {
                message: 'Hello again!!!'
            }
        }
    }
</script>
