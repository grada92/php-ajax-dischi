console.log('JS OK');

const app = new Vue ({
    el : '#app',
    data(){
        return {
            Music: [],
        }
    },
    mounted(){
        axios
        .get('album.php')
        .then((result)=>{
            console.log(result)
            this.Music = result.data
        })
    }
})