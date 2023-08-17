# Latihan - Version Control and Branch Management (Git)

### Soal Prioritas 1 (Nilai 80)

1. Buatlah sebuah repository github sesuai dengan namaKelas_namaKalian.
   - Membuat repository baru<br>
     ![Membuat repository baru](screenshoot/Soal%20Prioritas%201/nama-repository.png)
2. Buatlah folder yang berurutan dan diberi nama sesuai dengan nama soal yang kalian kerjakan.
   - Membuat folder<br>
     ![Membuat folder](screenshoot/Soal%20Prioritas%201/folder-name.png)
3. Pada setiap folder akan berisikan sub folder lagi.
   - Membuat sub folder<br>
     ![Membuat sub folder](screenshoot/Soal%20Prioritas%201/sub-folder-name.png)

### Soal Prioritas 2 (Nilai 20)

1. Buatlah branch baru pada github yang kalian buat
   - Membuat branch baru dengan nama "gittest"<br>
     ![Membuat branch baru dengan nama "gittest"](screenshoot/Soal%20Prioritas%202/buat-branch-baru.png)
   - Melihat list branch di remote repository<br>
     ![Melihat list branch di remote repository](screenshoot/Soal%20Prioritas%202/branch-baru.png)
   - Melihat isi branch "main"<br>
     ![Melihat isi branch "main"](screenshoot/Soal%20Prioritas%202/branch-main.png)
   - Melihat isi branch "gittest"<br>
     ![Melihat isi branch "gittest"](screenshoot/Soal%20Prioritas%202/branch-gittest.png)
2. Lakukan Pull Request pada branch tersebut sehingga akan menambah hal baru pada branch main/master
   - Melakukan pull & request<br>
     ![Melakukan pull & request](screenshoot/Soal%20Prioritas%202/pull-request.png)
   - Melihat perubahan file<br>
     ![Melihat perubahan file](screenshoot/Soal%20Prioritas%202/file-change.png)
   - Merge pull & request<br>
     ![Merge pull & request](screenshoot/Soal%20Prioritas%202/success-merge.png)
   - Melihat perubahan di branch "main"<br>
     ![Melihat perubahan di branch "main"](screenshoot/Soal%20Prioritas%202/update-branch-main.png)

### Soal Eksplorasi (Nilai 20)

1. Dengan project terserah kalian, praktikkan salah satu workflow sederhana dan buktikan dengan Screenshoot. Github flow/gitflow/trunkbase
   Github Flow
   - Membuat branch baru<br>
     ![Membuat branch baru](screenshoot/Soal%20Eksplorasi/create-new-branch.png)
   - Push branch baru ke remote repository<br>
     ![Push branch baru ke remote repository](screenshoot/Soal%20Eksplorasi/push-new-branch.png)
   - Melihat branch yang ada di remote repository<br>
     ![Melihat branch yang ada di remote repository](screenshoot/Soal%20Eksplorasi/branch-in-remote-repo.png)
   - Menambahkan file baru<br>
     ![Menambahkan file baru](screenshoot/Soal%20Eksplorasi/add-new-file.png)
   - Push file baru ke branch baru yang tadi dibuat<br>
     ![Push file baru ke branch baru yang tadi dibuat](screenshoot/Soal%20Eksplorasi/push-new-file.png)
   - Branch main tidak memiliki file baru<br>
     ![Branch main tidak memiliki file baru](screenshoot/Soal%20Eksplorasi/branch-main.png)
   - Branch feat memiliki file baru<br>
     ![Branch feat memiliki file baru](screenshoot/Soal%20Eksplorasi/branch-feat.png)
   - Melakukan pull & request<br>
     ![Melakukan pull & request](screenshoot/Soal%20Eksplorasi/pull-request.png)
   - Branch tidak memiliki conflict sehingga aman untuk dimerge<br>
     ![Branch tidak memiliki conflict sehingga aman untuk dimerge](screenshoot/Soal%20Eksplorasi/branch-no-conflict.png)
   - Merge berhasil dilakukan antara branch feat dan branch main<br>
     ![Merge berhasil dilakukan antara branch feat dan branch main](screenshoot/Soal%20Eksplorasi/success-merge.png)
   - Branch main sekarang memiliki file baru<br>
     ![Branch main sekarang memiliki file baru](screenshoot/Soal%20Eksplorasi/branch-main-now.png)

=======================================================================

# Summary Version Control and Branch Management (Git)

### Resume Materi KMReact

Poin penting yang dipelajari materi tersebut adalah

### 1. Memahami pengertian dari Versioning dan Version Control System.

Versioning merupakan sebuah praktik yang memiliki tugas untuk mengatur versi dari source code program. Contohnya ketika mengerjakan sebuah dokumen laporan atau skripsi yang memerlukan revisi berkali - kali sehingga penamaan dari setiap dokumen berbeda - beda. Hal tersebut berarti kita akan memiliki banyak dokumen. Apabila tidak memiliki Version Control System maka kita akan dibuat bingung oleh penamaan dokumen dan kita tidak mengetahui mana dokumen yang paling benar atau dokumen yang telah direvisi terakhir kali.

### 2. Memahami pengertian dari Git & Github

Git merupakan salah satu Version Control System populer yang digunakan para developer untuk mengembangkan software secara bersama-sama. Dengan adanya Git, kita dapat melakukan kegiatan programming dengan kolaborasi (Real World Collaboration) dan Git dimanfaatkan secara terdistribusi bukan tersentralisasi. Ketika melakukan Versioning, kita memerlukan sebuah server untuk menampung perubahan tersebut. Server itu disebut Github, yang merupakan git hosting service. Github sebagai sebuah platform yang menyediakan repositori untuk berkolaborasi dengan developer lain dalam mengembangkan sebuah software.

### 3. Memahami bagaimana menggunakan Git & Github

Dalam mengembangkan project, para developer memanfaatkan Git dan Github untuk berkolaborasi. Mereka dapat memanfaatkan Git & Github dengan menggunakan sebuah CLI ataupun Desktop.
