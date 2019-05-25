<template>
    <form @submit.prevent>

        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="active" v-model="form.active" :value="1">
            <label class="form-check-label" for="active">
                Active
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="inactive" v-model="form.active" :value="0">
            <label class="form-check-label" for="inactive">
                Inactive
            </label>
        </div>

        <br>
        <br>

        <div class="form-group">
            <label for="title">Title</label>
            <input v-model="form.title" type="text" class="form-control" id="title" placeholder="Enter title..." :disabled="!form.active">
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <textarea v-model="form.description" class="form-control" id="description" placeholder="Enter description..." :disabled="!form.active"></textarea>
        </div>
        <div class="form-group">
            <label for="options">Options</label>
            <select multiple class="form-control" id="options" v-model="form.options" :disabled="!form.active">
                <option v-for="(option, idx) in options" :key="idx" :value="option.value">{{option.label}}</option>
            </select>
        </div>
        <div class="form-check">
            <input v-model="form.terms" class="form-check-input" type="checkbox" id="checkbox" :disabled="!form.active">
            <label class="form-check-label" for="checkbox">Accept Terms</label>
        </div>
        <br>
        <button type="submit" class="btn btn-primary" @click="submitForm" :disabled="!form.active">Submit</button>
        <button class="btn btn-primary" @click="resetForm" :disabled="!form.active">Reset</button>
       
    </form>
</template>

<script>
    export default {
        name: 'BaseForm',
        data(){
            return{
                options: [
                    { value: 'option value 1', label: 'Option 1'},
                    { value: 'option value 2', label: 'Option 2'}
                ],
                form: {
                    title: '',
                    description: '',
                    terms: false,
                    options: [],
                    active: 0
                }
            }
        },
        methods: {
            resetForm(){
                this.form.title = ''
                this.form.description = ''
                this.form.terms = false
                this.form.options = []
                this.form.active = 0
            },
            submitForm(){

                //Validate Title
                if (this.form.title == ''){
                    alert('Please enter your title')
                    return
                }

                console.log(this.form)

                this.resetForm()
            }
        }
        
    }
</script>


<style scoped>
    .myclass{
        background: cyan
    }
</style>

