import {Component,OnInit,OnDestroy} from '@angular/core';
import {Post} from '../post.model';
import{PostsService} from '../posts.service';
import {Subscription} from 'rxjs';


@Component({
    selector:'app-post-list',
    templateUrl:'./post-list.component.html',
    styleUrls:['./post-list.component.css']

})
export class PostListComponent implements OnInit,OnDestroy{

    // posts:[
    //     {title:"first",  content:" first post\'s   "},
    //     {title:"2nd",  content:" second post\'s   "},
    //     {title:"3rd",  content:" third post\'s   "}
    // ];

     posts:Post[]=[];
     private postsSub:Subscription;

    constructor(public postService:PostsService){

    }

    ngOnInit(){
        this.postService.getPosts();
        this.postsSub=this.postService.getPostUpdateListener().
        subscribe(
            (posts:Post[])=>{
                this.posts=posts;
            }

        );
        
    }
    ngOnDestroy(){
        this.postsSub.unsubscribe();
    }

}