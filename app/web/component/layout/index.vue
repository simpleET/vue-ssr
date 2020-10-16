<template>
    <html v-if="isNode" class="isNode">
        <head>
            <title>{{title || 'Egg + Vue'}}</title>
            <meta name="keywords" :content="keywords">
            <meta name="description" :content="description">
            <meta http-equiv="content-type" content="text/html;charset=utf-8">
            <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
        </head>
        <body>
            <div id="app">
                <slot></slot>
            </div>
        </body>
    </html>
    <div v-else-if="!isNode" id="app">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        props: ['title', 'description', 'keywords'],
        computed: {
            isNode() {
                return EASY_ENV_IS_NODE;
            }
        }
    }
</script>
