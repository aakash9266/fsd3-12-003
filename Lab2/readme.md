#File System (FS Module)
- Fs module directly communicate to OS rather then browser the common operation ona file or folder are :-
1. file=> write File,read File, append File 
2. Folder=> mkdir/md | rmdir/rm  | readdir
3. File metadata=> stat/lstart/rstart
4. Watch =>  watch, unwatch
5. Stream =>  read stream(), write stream()

-  All fn are promise so it must be called with await keyword 

- Append