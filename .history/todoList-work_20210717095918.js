let data = [
    {
        content:"代辦事項一"
    },
    {
        content:"代辦事項二"
    }  
]:cherry_blossom:
let todoList = document.querySelector(".todoList")
let addBtn = document.querySelector(".addBtn")
let addTodos = document.querySelector(".addTodos")
let str=""
let count=0
function init(){   
    data.forEach(function(item,index){
        content = `  <div class="todoLists d-flex">
        <div>
            <input type="checkbox" name="checkbox" id="checkbox${index}" >
            <label for="checkbox${index}">${item.content}</label>
        </div>
        <div>
            <input type="button" class="delete" value="X"  data-num=${index}>   
        </div>                                                                    
    </div>` 
    str+=content
    })
    todoList.innerHTML = str
    
}
init()


addBtn.addEventListener("click",function(e){
    str=""
  if(e.target.nodeName=="BUTTON"){
      if(addTodos.value==""){
        return
      }else{ 
        let obj = {}
        obj.content = addTodos.value
        data.push(obj) 
        init()  
        addTodos.value = ""
      }    
  }

})

todoList.addEventListener("click",function(e){
    // console.log(e.target.getAttribute("data-num"));
    if(e.target.getAttribute("class")=="delete"){
        num = e.target.getAttribute("data-num")       
        let result = confirm("是否確定刪除")            
        if(result==true){
            data.splice(num,1)
        }
        str = ''
        init()  
    }
})

todoList.addEventListener("click",function(e){
    // console.log(e.target.type);
    if(e.target.type=="checkbox"){
        count++
        if(count%2==1){
            
        }
    }
})