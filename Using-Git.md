  Git 是目前世界上最先进的分布式版本控制系统

  pwd  命令用于显示当前目录

- git init :    把某个目录变成 Git 可以管理的仓库(初始化某个目录为 Git 的仓库)

-   #常规操作#
- git add <file>    把文件修改添加到暂存区
    git add .   添加所有工作区的修改到暂存区中
    git add <指定文件.后缀名>   添加工作区中修改的指定文件到暂存区中

- git commit :  提交更改，实际上就是把暂存区的所有内容提交到当前分支(本地仓库)
    git commit -m 'xxxx'    xxxx是对本次提交的说明(尽量用英文)

- git push origin master    把本地提交push到远程仓库中去

-   #辅助操作#
- git status    查看仓库当前的状态(是否有修改，是否有提交，和远程仓库是否同步)

- git diff  顾名思义就是查看 difference，查看工作区和版本库里面最新版本的区别，
            显示的格式正是 Unix 通用的 diff 格式
    git diff HEAD -- 指定文件.后缀名    查看工作区和版本库里面最新版本的指定文件区别

- git log   查看从最近到最远的提交日志(较详细)
    git log --pretty=oneline    一行显示一个提交(粗略)
    git reflog  查看命令历史，以便确定要回到未来的哪个版本

- git checkout -- file  丢弃工作区中对 file 的修改
        这里有两种情况：
        一种是 file 自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；
        一种是 file 已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。
        总之，就是让这个文件回到最近一次 git commit 或 git add 时的状态。
        
        git checkout -- file    命令中的--很重要，没有--，就变成了“切换到另一个分支”的命令.

- git reset HEAD <file>    把暂存区的修改撤销掉 (unstage)，重新放回工作区

- git rm file    从版本库中删除文件


 --版本是针对每一次commit的--
-   #版本回退# 
    git reset --hard HEAD^  将版本回退到上一个提交之前
        git reset --hard xxxxxx   将版本回到某次指定提交之后(xxxxxx是 commit id, commit id 是通过 SHA1(安全哈希                           算法（Secure Hash Algorithm）)计算出来的一个非常大的数字，用十六进制表示，                           我们通常取前面6位)
        #说明#
        1、上一个版本就是 HEAD^，上上一个版本就是 HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成    HEAD~100。
        2、Git 的版本回退速度非常快，因为 Git 在内部有个指向当前版本的 HEAD 指针，当你回退版本的时候，Git 仅仅是把 HEAD 的指向做出了改变。

-   #版本库(Repository)#
    工作区有一个隐藏目录 .git，这个不算工作区，而是 Git 的版本库。
    版本库中有：
               最重要的就是称为 stage（或者叫 index）的暂存区。
               Git 为我们自动创建的第一个分支 master。
               指向 master 的一个指针叫 HEAD。
