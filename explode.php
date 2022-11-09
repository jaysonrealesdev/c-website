<td> <?php
    $db_subjects explode(',', $role_subjects);
     /* $string_subjects implode('<br>', $db_subjects); */
      = $5 = array_unique($db_subjects);
       if ($role == 'Teacher'){
         foreach($s as $subject){ 
            echo "<span class='badge bg-primary subjects-item'>$subject</span> "; 
        } }else{ 
            echo "<span class='badge bg-primary">Administrator</span>"; 
        } ?>
    </td>  36 seconds ago