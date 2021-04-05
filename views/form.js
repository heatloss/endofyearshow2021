module.exports = (data) => {
  let template = `
  <!DOCTYPE html>
    <html>
    <head>
      <title>EOYS 2021 Submission Form</title>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="author" content="Erin Sparling">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yegor256/tacit@gh-pages/tacit-css-1.5.5.min.css" />
      <link rel="stylesheet" href="css/formstyles.css">
    </head>
    <body>
    <header class="introduction">
      <h1>
        EOYS 2021 Submission Form 
      </h1>
      <h2>
        The survey will take approximately 5 minutes to complete. 
      </h2>
      <h3>
        Student work collection for the Cooper Union End of the Year Show for the <nobr>2020-2021</nobr> school year. 
      </h3>
      <h4>
        NOTE: please submit a new copy of this form for each piece you'd like to enter into the show. 
      </h4>
      <small class="explan">* Required</small> 
    </header>
    <article class="main">
      <fieldset class="section-personalinfo">
        <legend>Personal Information</legend> 
        <div class="formblock" data-required="required">
          <label class="titlelabel" for="firstname">First name</label> 
          <p class="label-context">
            Please enter your preferred first name. This can differ from your legal or Cooper registered first name. 
          </p>
          <div class="form-input" data-inputtype="text">
            <input id="firstname" name="firstname" type="text" placeholder="First name">
          </div>
        </div>
        <div class="formblock" data-required="required">
          <label class="titlelabel" for="lastname">Last name</label> 
          <p class="label-context">
            Please enter your preferred last name. This can differ from your legal or Cooper registered last name. 
          </p>
          <div class="form-input" data-inputtype="text">
            <input id="lastname" name="lastname" type="text" placeholder="Last name">
          </div>
        </div>
        <div class="formblock" data-required="required">
          <span class="pseudolabel">Academic year</span> 
          <div class="form-input" data-inputtype="radio">
            <ul class="inputlist radio">
              <li><label for="academicyear-1"> 
              <input type="radio" name="academicyear" id="academicyear-1" value="freshman">
              Freshman</label></li>
              <li><label for="academicyear-2"> 
              <input type="radio" name="academicyear" id="academicyear-2" value="sophomore">
              Sophomore</label></li>
              <li><label for="academicyear-3"> 
              <input type="radio" name="academicyear" id="academicyear-3" value="junior">
              Junior</label></li>
              <li><label for="academicyear-4"> 
              <input type="radio" name="academicyear" id="academicyear-4" value="senior">
              Senior</label></li>
              <li class="special radio-text"> <label for="academicyear-5"> 
              <input type="radio" name="academicyear" id="academicyear-5" value="other">
              Other:</label> 
              <input id="academicyear-other-text" type="text" class="academicyear-other-text" placeholder="Other">
              </li>
            </ul>
          </div>
        </div>
      </fieldset>
      <fieldset class="section-typeofwork">
        <legend>Type of work</legend> 
        <p class="sublegend">
          Special considerations have been made for different types of media. This choice is exclusively about the documentation of your piece, and not the medium of the piece itself. 
        </p>
        <div class="formblock" data-required="required">
          <span class="pseudolabel">Documentation Format</span> 
          <p class="label-context">
            For example, if your piece is a video of a 3d model, you would choose video. If your work is a painting that is documented through photography or other imagery, choose Images. 
          </p>
          <div class="form-input" data-inputtype="radio">
            <ul class="inputlist radio">
              <li><label for="documentationformat-1"> 
              <input type="radio" name="documentationformat" id="documentationformat-1" value="video">
              Video</label></li>
              <li><label for="documentationformat-2"> 
              <input type="radio" name="documentationformat" id="documentationformat-2" value="audio">
              Audio</label></li>
              <li><label for="documentationformat-3"> 
              <input type="radio" name="documentationformat" id="documentationformat-3" value="images">
              Images</label></li>
              <li><label for="documentationformat-4"> 
              <input type="radio" name="documentationformat" id="documentationformat-4" value="text">
              Text</label></li>
            </ul>
          </div>
        </div>
      </fieldset>
      <fieldset class="section-standardwork">
        <legend>Standard Work Information</legend> 
        <p class="sublegend">
          For each piece of work, please submit all creative assets together as one form. For each new piece, re-submit a new form. 
        </p>
        <p class="sublegend">
          Please see the <a href="https://cooperunion.sharepoint.com/:b:/s/art.eyos/EVBVdfN4bk1ArQlQTVQ6- xsBNaaYMyXSi8i83cof-J5zWw?e=U2R8Fb">ARTWORK UPLOAD GUIDELINES</a> for more information. 
        </p>
        <div class="formblock" data-required="required">
          <label class="titlelabel" for="worktitle">Title</label> 
          <p class="label-context">
            If untitled, please write it as so. 
          </p>
          <div class="form-input" data-inputtype="text">
            <input id="worktitle" name="worktitle" type="text" placeholder="Title">
          </div>
        </div>
        <div class="formblock" data-required="required">
          <label class="titlelabel" for="artworkupload">Artwork</label> 
          <p class="label-context">
            Please upload from one to five files of the same filetype that represent this piece. For the case of a work that requires two types of media, please submit a separate form for the alternate media. 
          </p>
          <div class="form-input" data-inputtype="file">
            <input id="artworkupload" name="artworkupload" class="input-file" type="file">
          </div>
        </div>
        <div class="formblock" data-required="required">
          <span class="pseudolabel">Type of work</span> 
          <p class="label-context">
            What document type are you going to upload for this work? 
          </p>
          <p class="label-context">
            Note about PDFs: Unless you are working with PDF as a medium, please convert the pages to individual images. 
          </p>
          <div class="form-input" data-inputtype="radio">
            <ul class="inputlist radio">
              <li><label for="typeofwork-1"> 
              <input type="radio" name="typeofwork" id="typeofwork-1" value="audio">
              Audio: mp3, aiff, wav</label></li>
              <li><label for="typeofwork-2"> 
              <input type="radio" name="typeofwork" id="typeofwork-2" value="image">
              Image: png, jpg, gif, tiff, psd, ai, eps</label></li>
              <li><label for="typeofwork-3"> 
              <input type="radio" name="typeofwork" id="typeofwork-3" value="pdf">
              PDF: pdf</label></li>
              <li><label for="typeofwork-4"> 
              <input type="radio" name="typeofwork" id="typeofwork-4" value="text">
              Text: doc, docx, txt</label></li>
            </ul>
          </div>
        </div>
        <div class="formblock" data-required="required">
          <label class="titlelabel" for="thumbnailupload">Thumbnail</label> 
          <p class="label-context">
            Please upload an image (png preferably, jpg or gif) to use as a thumbnail or key art for this work (640px as the widest dimension). 
          </p>
          <p class="label-context">
            NOTE: DO NOT upload anything other than an above image file type, despite what the form says.
          </p>
          <div class="form-input" data-inputtype="file">
            <input id="thumbnailupload" name="thumbnailupload" class="input-file" type="file">
          </div>
        </div>
        <div class="formblock" data-required="required">
          <label class="titlelabel" for="dimensions">Dimensions</label> 
          <p class="label-context">
            Please enter the dimensions for your piece. This is free-form, and could be LxWxH, time, file size, or any other numeric representation of your work's "size." 
          </p>
          <div class="form-input" data-inputtype="text">
            <input id="dimensions" name="dimensions" type="text" placeholder="Dimensions">
          </div>
        </div>
        <div class="formblock" data-required="required">
          <label class="titlelabel" for="dimensions">Materials</label> 
          <p class="label-context">
            What is your piece made up of? 
          </p>
          <div class="form-input" data-inputtype="text">
            <input id="materials" name="materials" type="text" placeholder="Materials">
          </div>
        </div>
        <div class="formblock" data-required="optional">
          <label class="titlelabel" for="description">Description</label> 
          <p class="label-context">
            OPTIONAL: Please describe your piece in any length, as an artist statement or otherwise. 
          </p>
          <div class="form-input" data-inputtype="textarea">
            <textarea id="description" name="description">Description</textarea>
          </div>
        </div>
        <div class="formblock" data-required="required">
          <span class="pseudolabel">Medium</span> 
          <p class="label-context">
            Select all the tags that best describe the medium of the work(s) you are submitting. 
          </p>
          <p class="label-context">
            NOTE: it's not the class it was made in. (eg: a film made in Sculpture class should get a tag below of Film, etc) 
          </p>
          <div class="form-input" data-inputtype="checkboxes">
            <ul class="inputlist checkboxes">
              <li><label for="medium-1"> 
              <input type="checkbox" name="medium" id="medium-1" value="Alternative Process">
              Alternative Process (photo) </label></li>
              <li><label for="medium-2"> 
              <input type="checkbox" name="medium" id="medium-2" value="Animation">
              Animation</label></li>
              <li><label for="medium-3"> 
              <input type="checkbox" name="medium" id="medium-3" value="Data Visualization">
              Data Visualization</label></li>
              <li><label for="medium-4"> 
              <input type="checkbox" name="medium" id="medium-4" value="Drawing">
              Drawing</label></li>
              <li><label for="medium-5"> 
              <input type="checkbox" name="medium" id="medium-5" value="Etching">
              Etching</label></li>
              <li><label for="medium-6"> 
              <input type="checkbox" name="medium" id="medium-6" value="Film">
              Film</label></li>
              <li><label for="medium-7"> 
              <input type="checkbox" name="medium" id="medium-7" value="Graphic Design ">
              Graphic Design </label></li>
              <li><label for="medium-8"> 
              <input type="checkbox" name="medium" id="medium-8" value="Interactive ">
              Interactive </label></li>
              <li><label for="medium-9"> 
              <input type="checkbox" name="medium" id="medium-9" value="Installation ">
              Installation </label></li>
              <li><label for="medium-10"> 
              <input type="checkbox" name="medium" id="medium-10" value="Letterpress ">
              Letterpress </label></li>
              <li><label for="medium-11"> 
              <input type="checkbox" name="medium" id="medium-111" value="Lithography ">
              Lithography </label></li>
              <li><label for="medium-12"> 
              <input type="checkbox" name="medium" id="medium-12" value="Motion Graphics ">
              Motion Graphics </label></li>
              <li><label for="medium-13"> 
              <input type="checkbox" name="medium" id="medium-13" value="Painting ">
              Painting </label></li>
              <li><label for="medium-14"> 
              <input type="checkbox" name="medium" id="medium-14" value="Papermaking ">
              Papermaking </label></li>
              <li><label for="medium-15"> 
              <input type="checkbox" name="medium" id="medium-15" value="Performance ">
              Performance </label></li>
              <li><label for="medium-16"> 
              <input type="checkbox" name="medium" id="medium-16" value="Photography ">
              Photography </label></li>
              <li><label for="medium-17"> 
              <input type="checkbox" name="medium" id="medium-17" value="Printmaking ">
              Printmaking </label></li>
              <li><label for="medium-18"> 
              <input type="checkbox" name="medium" id="medium-18" value="Relief">
              Relief</label></li>
              <li><label for="medium-19"> 
              <input type="checkbox" name="medium" id="medium-19" value="Silkscreen ">
              Silkscreen </label></li>
              <li><label for="medium-20"> 
              <input type="checkbox" name="medium" id="medium-20" value="Sculpture">
              Sculpture</label></li>
              <li><label for="medium-21"> 
              <input type="checkbox" name="medium" id="medium-21" value="Sound Art">
              Sound Art</label></li>
              <li><label for="medium-22"> 
              <input type="checkbox" name="medium" id="medium-22" value="Video">
              Video</label></li>
              <li><label for="medium-23"> 
              <input type="checkbox" name="medium" id="medium-23" value="Visual Identity">
              Visual Identity</label></li>
            </ul>
          </div>
        </div>
        <div class="formblock" data-required="required">
          <label class="titlelabel" for="dimensions">Alt text</label> 
          <p class="label-context">
            For accessibility considerations, please enter a description of the physical characteristics of the work. For reference, please see <a href="https://www.artnews.com/art-in-america/features/the-met-mca-chicago-blind-access-alt-text- park-mcarthur-shannon-finnegan-1202677577/">this Art News article on alt text and museums</a>. 
          </p>
          <div class="form-input" data-inputtype="text">
            <input id="alttext" name="alttext" type="text" placeholder="Alt text">
          </div>
        </div>
      </fieldset>
      <fieldset class="section-videowork">
        <legend>Video Work Information</legend> 
        <p class="sublegend">
          This section is ONLY for for video work. If your documentation of your work is not video, please go back and choose the correct media. Note, you must follow the video uploading instructions below. 
        </p>
        <p class="sublegend">
          Please refer to the <a href="https://cooperunion.sharepoint.com/:b:/s/art.eyos/EVBVdfN4bk1ArQlQTVQ6- xsBNaaYMyXSi8i83cof-J5zWw?e=U2R8Fb">ARTWORK UPLOAD GUIDELINES</a> if you have any questions. 
        </p>
        <div class="formblock" data-required="required">
          <label class="titlelabel" for="videoworktitle">Title</label> 
          <p class="label-context">
            If untitled, please write it as so. 
          </p>
          <div class="form-input" data-inputtype="text">
            <input id="videoworktitle" name="videoworktitle" type="text" placeholder="Title">
          </div>
        </div>
        <div class="formblock" data-required="required">
          <label class="titlelabel" for="videoworkupload">Video Upload Artwork ID</label> 
          <p class="label-context">
            1. Please upload your video file via the <a href="https://cooper-union-vimeo-uploader.glitch.me">Cooper Union Video Uploader</a>. This page will open in a new window. 
          </p>
          <p class="label-context">
            2. Copy the Video ID from the end of the upload process above. The upload process may take a few minutes, depending on upload speed, file size, location etc. 
          </p>
          <p class="label-context">
            3. Paste the Video ID in this form, below. 
          </p>
          <p class="label-context">
            For any questions about this process, please refer to the <a href="https://cooperunion.sharepoint.com/:b:/s/art.eyos/EVBVdfN4bk1ArQlQTVQ6- xsBNaaYMyXSi8i83cof-J5zWw?e=U2R8Fb">ARTWORK UPLOADING GUIDELINES</a>. 
          </p>
          <div class="form-input" data-inputtype="text">
            <input id="videoworkid" name="videoworkid" type="text" placeholder="Video ID">
          </div>
        </div>
        <div class="formblock" data-required="required">
          <span class="pseudolabel">Type of work</span> 
          <p class="label-context">
            What document type are you going to upload for this work? Since this work is a video file, there is only one option. 
          </p>
          <div class="form-input" data-inputtype="checkboxes">
            <ul class="inputlist checkboxes">
              <li><label for="typeofvideowork-1"> 
              <input type="checkbox" name="typeofvideowork" id="typeofvideowork-1" value="video" checked="checked">
              Video</label></li>
            </ul>
          </div>
        </div>
        <div class="formblock" data-required="required">
          <span class="pseudolabel">Medium</span> 
          <p class="label-context">
            Select all the tags that best describe the main medium of the video file you are submitting. 
          </p>
          <p class="label-context">
            For example: if this was shot on Film select Film below; if this is documentation of a Performance, tag it as Performance, etc. 
          </p>
          <div class="form-input" data-inputtype="checkboxes">
            <ul class="inputlist checkboxes">
              <li><label for="videomedium-1"> 
              <input type="checkbox" name="videomedium" id="videomedium-1" value="Animation">
              Animation</label></li>
              <li><label for="videomedium-2"> 
              <input type="checkbox" name="videomedium" id="videomedium-2" value="Film">
              Film</label></li>
              <li><label for="videomedium-3"> 
              <input type="checkbox" name="videomedium" id="videomedium-3" value="Graphic Design ">
              Graphic Design </label></li>
              <li><label for="videomedium-4"> 
              <input type="checkbox" name="videomedium" id="videomedium-4" value="Installation ">
              Installation </label></li>
              <li><label for="videomedium-5"> 
              <input type="checkbox" name="videomedium" id="videomedium-5" value="Motion Graphics ">
              Motion Graphics </label></li>
              <li><label for="videomedium-6"> 
              <input type="checkbox" name="videomedium" id="videomedium-6" value="Performance ">
              Performance </label></li>
              <li><label for="videomedium-7"> 
              <input type="checkbox" name="videomedium" id="videomedium-7" value="Sound Art">
              Sound Art</label></li>
              <li><label for="videomedium-8"> 
              <input type="checkbox" name="videomedium" id="videomedium-8" value="Video">
              Video</label></li>
            </ul>
          </div>
        </div>
        <div class="formblock" data-required="required">
          <label class="titlelabel" for="videothumbnailupload">Thumbnail</label> 
          <p class="label-context">
            Please upload an image (png preferably, jpg or gif) to use as a thumbnail or key art for this work (640px as the widest dimension). 
          </p>
          <p class="label-context">
            NOTE: DO NOT upload anything other than an above image file type, despite what the form says. 
          </p>
          <div class="form-input" data-inputtype="file">
            <input id="videothumbnailupload" name="videothumbnailupload" class="input-file" type="file">
          </div>
        </div>
        <div class="formblock" data-required="optional">
          <label class="titlelabel" for="videodimensions">Dimensions</label> 
          <p class="label-context">
            OPTIONAL: Please describe your piece in any length, as an artist statement or otherwise. 
          </p>
          <div class="form-input" data-inputtype="text">
            <input id="videodimensions" name="videodimensions" type="text" placeholder="Dimensions">
          </div>
        </div>
        <div class="formblock" data-required="required">
          <label class="titlelabel" for="videodescription">Description</label> 
          <p class="label-context">
            Please describe your piece in any length. 
          </p>
          <div class="form-input" data-inputtype="textarea">
            <textarea id="videodescription" name="videodescription">Description</textarea>
          </div>
        </div>
        <div class="formblock" data-required="required">
          <label class="titlelabel" for="dimensions">Alt text</label> 
          <p class="label-context">
            For accessibility considerations, please enter a description of the physical characteristics of the work. For reference, please see <a href="https://www.artnews.com/art-in-america/features/the-met-mca-chicago-blind-access-alt-text- park-mcarthur-shannon-finnegan-1202677577/">this Art News article on alt text and museums</a>. 
          </p>
          <div class="form-input" data-inputtype="text">
            <input id="alttextvideo" name="alttextvideo" type="text" placeholder="Alt text">
          </div>
        </div>
      </fieldset>
      <fieldset class="section-classinfo">
        <legend>Class Information</legend> 
        <p class="sublegend">
          Please use this section to annotate which class this work is from. 
        </p>
        <div class="formblock" data-required="required">
          <span class="pseudolabel">Instructor</span> 
          <p class="label-context">
            Please select the faculty who taught the class this piece was made in. If work was not done in a class, select that option below. 
          </p>
          <div class="form-input" data-inputtype="datalist">
            <input list="datalist-teachers" id="faculty" name="faculty" placeholder="Instructor" />
            <datalist id="datalist-teachers"></datalist> 
          </div>
        </div>
        <div class="formblock" data-required="required">
          <span class="pseudolabel">Was this piece recommended by your instructor for inclusion in the End of the Year show?</span> 
          <div class="form-input" data-inputtype="radio">
            <ul class="inputlist radio">
              <li><label for="recommended-1"> 
              <input type="radio" name="academicyear" id="recommended-1" value="yes">
              Yes</label></li>
              <li><label for="recommended-2"> 
              <input type="radio" name="academicyear" id="recommended-2" value="no">
              No</label></li>
            </ul>
          </div>
        </div>
        <div class="formblock" data-required="required">
          <span class="pseudolabel">Class</span> 
          <p class="label-context">
            Please choose the class(es). 
          </p>
          <div class="form-input" data-inputtype="datalist">
            <input list="datalist-classes" id="classes" name="classes" placeholder="Classes" />
            <datalist id="datalist-classes"></datalist> 
          </div>
        </div>
        <div class="formblock" data-required="optional">
          <span class="pseudolabel">Collaborators</span> 
          <p class="label-context">
            Please select your fellow collaborators. 
          </p>
          <div class="form-input" data-inputtype="datalist">
            <input list="datalist-collaborators" id="collaborators" name="collaborators" placeholder="Classes" />
            <datalist id="datalist-collaborators"></datalist> 
          </div>
        </div>
      </fieldset>
      <button type="submit">Submit</button> 
    </article>
    <footer>
      <h3>
        Thank you for uploading this work. 
      </h3>
      <h4>
        If you have more work to submit, please re-submit this form. 
      </h4>
    </footer>
    <script src="js/formsfx.js">
    </script>
    </body>
    </html>`
  return template
}