<template>
  <section class="hl_page-creator--element-group">
    <a href="#" class="close-group" id="close-element-group"><i class="icon icon-close"></i></a>
    <div class="hl_element-group">
      <div class="tab-content" id="hl_element-group-tab">
        <div
          class="tab-pane fade"
          id="add-element"
          role="tabpanel"
          aria-labelledby="add-element-tab"
        >
          <div class="add-element">
            <div class="add-element-menu">
              <ul>
                <li class="active">
                  <a href="#">All</a>
                </li>
                <li>
                  <a href="#">Text</a>
                </li>
                <li>
                  <a href="#">Media</a>
                </li>
                <li>
                  <a href="#">Form</a>
                </li>
                <li>
                  <a href="#">Content</a>
                </li>
                <li>
                  <a href="#">Countdown</a>
                </li>
                <li>
                  <a href="#">Misc</a>
                </li>
              </ul>
            </div>
            <div class="add-element-body">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Search" />
              </div>
              <div class="element-group">
                <h4>Text</h4>
                <div class="element-cards">
                  <drag
                    transfer-data="Headline"
                    class="element-card"
                    @dragstart="onHeadingDragStart"
                    id="headline-card"
                  >
                    <div>
                      <div class="icon">
                        <i class="fas fa-heading"></i>
                      </div>
                      <h5>Headline</h5>
                    </div>
                  </drag>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-font"></i>
                    </div>
                    <h5>Sub-headline</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-paragraph"></i>
                    </div>
                    <h5>Paragraph</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-list"></i>
                    </div>
                    <h5>Bullet List</h5>
                  </div>
                </div>
              </div>
              <div class="element-group">
                <h4>Media</h4>
                <div class="element-cards">
                  <drag
                    class="element-card"
                    transfer-data="Image"
                    @dragstart="onHeadingDragStart"
                    id="image-card"
                  >
                    <div>
                      <div class="icon">
                        <i class="fas fa-image"></i>
                      </div>
                      <h5>Image</h5>
                    </div>
                  </drag>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-images"></i>
                    </div>
                    <h5>Image Popup</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-play-circle"></i>
                    </div>
                    <h5>Video</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="far fa-play-circle"></i>
                    </div>
                    <h5>Video popup</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-volume-up"></i>
                    </div>
                    <h5>Audio player</h5>
                  </div>
                </div>
              </div>
              <div class="element-group">
                <h4>Form</h4>
                <div class="element-cards">
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-stop"></i>
                    </div>
                    <h5>Button</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fab fa-facebook-f"></i>
                    </div>
                    <h5>Facebook Option</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="far fa-square"></i>
                    </div>
                    <h5>Input</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="far fa-hand-pointer"></i>
                    </div>
                    <h5>Select Box</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-comment-alt"></i>
                    </div>
                    <h5>Text Area</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-check-square"></i>
                    </div>
                    <h5>Checkbox Headline</h5>
                  </div>
                </div>
              </div>
              <div class="element-group">
                <h4>Advance Form</h4>
                <div class="element-cards">
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-sms"></i>
                    </div>
                    <h5>SMS Sign up</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-file-invoice"></i>
                    </div>
                    <h5>Billing Add.</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-file-invoice"></i>
                    </div>
                    <h5>Shipping Add.</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-poll-h"></i>
                    </div>
                    <h5>Survey</h5>
                  </div>
                </div>
              </div>
              <div class="element-group">
                <h4>Content Blocks</h4>
                <div class="element-cards">
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-circle"></i>
                    </div>
                    <h5>Icon</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-file-image"></i>
                    </div>
                    <h5>Img Feature</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-link"></i>
                    </div>
                    <h5>Navigation</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="far fa-question-circle"></i>
                    </div>
                    <h5>FAQ</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="far fa-window-minimize"></i>
                    </div>
                    <h5>Divider</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-window-minimize"></i>
                    </div>
                    <h5>Progress bar</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-list"></i>
                    </div>
                    <h5>Image List</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-table"></i>
                    </div>
                    <h5>Pricing Table</h5>
                  </div>
                </div>
              </div>
              <div class="element-group">
                <h4>Countdown</h4>
                <div class="element-cards">
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-hourglass-start"></i>
                    </div>
                    <h5>Countdown</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="far fa-clock"></i>
                    </div>
                    <h5>Minute Timer</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-clock"></i>
                    </div>
                    <h5>Day Timer</h5>
                  </div>
                </div>
              </div>
              <div class="element-group">
                <h4>Misc Elements</h4>
                <div class="element-cards">
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-share-alt-square"></i>
                    </div>
                    <h5>Social Share</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-bell"></i>
                    </div>
                    <h5>Privacy Notice</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-comments"></i>
                    </div>
                    <h5>FB Comments</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-align-center"></i>
                    </div>
                    <h5>Text Block</h5>
                  </div>
                  <div class="element-card">
                    <div class="icon">
                      <i class="fas fa-code"></i>
                    </div>
                    <h5>Custom JS/HTML</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="manage-elements"
          role="tabpanel"
          aria-labelledby="manage-elements-tab"
        >
          <div class="manage-elements">
            <h2>Manage Elements</h2>
            <div class="elements-section-group-wrap">
              <div class="elements-section-group">
                <h3>Section > Left Column</h3>
                <ul class="elements">
                  <li>
                    <h4>Image</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="fas fa-arrows-alt-v"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-eye"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-copy"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="elements-section-group">
                <h3>Section > Right Column</h3>
                <ul class="elements">
                  <li>
                    <h4>Headline</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="fas fa-arrows-alt-v"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-eye"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-copy"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </div>
                  </li>
                  <li>
                    <h4>Headline</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="fas fa-arrows-alt-v"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-eye"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-copy"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </div>
                  </li>
                  <li>
                    <h4>Input Form</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="fas fa-arrows-alt-v"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-eye"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-copy"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </div>
                  </li>
                  <li>
                    <h4>Input Form</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="fas fa-arrows-alt-v"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-eye"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-copy"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </div>
                  </li>
                  <li>
                    <h4>Button</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="fas fa-arrows-alt-v"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-eye"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-copy"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="elements-section-group">
                <h3>Section > Full Column</h3>
                <ul class="elements">
                  <li>
                    <h4>Headline</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="fas fa-arrows-alt-v"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-eye"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-copy"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </div>
                  </li>
                  <li>
                    <h4>Button</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="fas fa-arrows-alt-v"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-eye"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-copy"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </div>
                  </li>
                  <li>
                    <h4>Input</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="fas fa-arrows-alt-v"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-eye"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-copy"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </div>
                  </li>
                  <li>
                    <h4>Button</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="fas fa-arrows-alt-v"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-eye"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-copy"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </div>
                  </li>
                  <li>
                    <h4>Headline</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="fas fa-arrows-alt-v"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-eye"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-copy"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="elements-section-group">
                <h3>Section > Right Column</h3>
                <ul class="elements">
                  <li>
                    <h4>Headline</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="fas fa-arrows-alt-v"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-eye"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-copy"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </div>
                  </li>
                  <li>
                    <h4>Headline</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="fas fa-arrows-alt-v"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-eye"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-copy"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </div>
                  </li>
                  <li>
                    <h4>Input Form</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="fas fa-arrows-alt-v"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-eye"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-copy"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </div>
                  </li>
                  <li>
                    <h4>Input Form</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="fas fa-arrows-alt-v"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-eye"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-copy"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </div>
                  </li>
                  <li>
                    <h4>Button</h4>
                    <div class="actions">
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="fas fa-arrows-alt-v"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-eye"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-copy"></i
                      ></a>
                      <a href="#" class="btn btn-square-sm btn-light4"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    onHeadingDragStart() {
      // Close the menu automatically on dragging
      document.querySelector("#page-creator").classList.remove("--menu-active");
      document.querySelector(".hl_page-creator--element-group").classList.remove("active");
    }
  }
};
</script>
