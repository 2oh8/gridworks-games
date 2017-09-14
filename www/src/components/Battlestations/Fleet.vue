<template>
    <table id="fleet">
        <tr>
            <td></td>
            <td>A</td>
            <td>B</td>
            <td>C</td>
            <td>D</td>
            <td>E</td>
            <td>F</td>
            <td>G</td>
            <td>H</td>
            <td>I</td>
            <td>J</td>
        </tr>

        <tr>
            <td>A</td>
            <td id="1"></td>
            <td id="2"></td>
            <td id="3"></td>
            <td id="4"></td>
            <td id="5"></td>
            <td id="6"></td>
            <td id="7"></td>
            <td id="8"></td>
            <td id="9"></td>
            <td id="10"></td>
        </tr>

        <tr>
            <td>B</td>
            <td id="11"></td>
            <td id="12"></td>
            <td id="13"></td>
            <td id="14"></td>
            <td id="15"></td>
            <td id="16"></td>
            <td id="17"></td>
            <td id="18"></td>
            <td id="19"></td>
            <td id="20"></td>
        </tr>

        <tr>
            <td>C</td>
            <td id="21"></td>
            <td id="22"></td>
            <td id="23"></td>
            <td id="24"></td>
            <td id="25"></td>
            <td id="26"></td>
            <td id="27"></td>
            <td id="28"></td>
            <td id="29"></td>
            <td id="30"></td>
        </tr>

        <tr>
            <td>D</td>
            <td id="31"></td>
            <td id="32"></td>
            <td id="33"></td>
            <td id="34"></td>
            <td id="35"></td>
            <td id="36"></td>
            <td id="37"></td>
            <td id="38"></td>
            <td id="39"></td>
            <td id="40"></td>
        </tr>

        <tr>
            <td>E</td>
            <td id="41"></td>
            <td id="42"></td>
            <td id="43"></td>
            <td id="44"></td>
            <td id="45"></td>
            <td id="46"></td>
            <td id="47"></td>
            <td id="48"></td>
            <td id="49"></td>
            <td id="50"></td>
        </tr>

        <tr>
            <td>F</td>
            <td id="51"></td>
            <td id="52"></td>
            <td id="53"></td>
            <td id="54"></td>
            <td id="55"></td>
            <td id="56"></td>
            <td id="57"></td>
            <td id="58"></td>
            <td id="59"></td>
            <td id="60"></td>
        </tr>

        <tr>
            <td>G</td>
            <td id="61"></td>
            <td id="62"></td>
            <td id="63"></td>
            <td id="64"></td>
            <td id="65"></td>
            <td id="66"></td>
            <td id="67"></td>
            <td id="68"></td>
            <td id="69"></td>
            <td id="70"></td>
        </tr>

        <tr>
            <td>H</td>
            <td id="71"></td>
            <td id="72"></td>
            <td id="73"></td>
            <td id="74"></td>
            <td id="75"></td>
            <td id="76"></td>
            <td id="77"></td>
            <td id="78"></td>
            <td id="79"></td>
            <td id="80"></td>
        </tr>

        <tr>
            <td>I</td>
            <td id="81"></td>
            <td id="82"></td>
            <td id="83"></td>
            <td id="84"></td>
            <td id="85"></td>
            <td id="86"></td>
            <td id="87"></td>
            <td id="88"></td>
            <td id="89"></td>
            <td id="90"></td>
        </tr>

        <tr>
            <td>J</td>
            <td id="91"></td>
            <td id="92"></td>
            <td id="93"></td>
            <td id="94"></td>
            <td id="95"></td>
            <td id="96"></td>
            <td id="97"></td>
            <td id="98"></td>
            <td id="99"></td>
            <td id="100"></td>
        </tr>

    </table>

</template>


<script>
    export default {
        name: 'fleet',
        data() {
            return {
                //msg: "Messages go here",
            }
        },

        components: {
        },

        computed: {
        },

        methods: {
            changeBlue(el) {
                var x = document.getElementById(el);
                x.style.backgroundColor = 'blue';
            }
        }
    }

</script>

<style scoped>
    .cont {
        display: inline-block;
    }

    .test {
        height: 35px;
        width: 25px;
        border: 1px solid blue;
        float: left;
    }

    table {
        border-collapse: collapse;
    }

    td {
        width: 30px;
        height: 42px;
        border: 1px solid white;
        margin: 0;
        font-style: Arial;
        text-align: center;
    }

    .card {
        height: 500px;
        display: inline-block;
    }

    .card-block {
        text-align: center;
    }

    .card-title {
        text-align: center;
    }

    .right {
        float: right;
        margin: 0;
    }

    .centerCard {
        text-align: center;
        width: 293px;
        color: red;
    }

    .center {
        text-align: center;
        padding: 0, 15px, 0, 15px;
    }

    h1,
    h2 {
        font-weight: normal;
    }

    h5,
    h6 {
        padding: 10px, 10px, 0, 10px
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>