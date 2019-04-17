<template>
  <section class="hl_page-creator--main">
    <div class="hl_page-creator--menu">
      <div class="menu--left">
        <button
          type="button"
          class="btn btn-light btn-sm"
          data-tooltip="tooltip"
          data-placement="top"
          title="Back"
        >
          <i class="fas fa-arrow-left"></i>
        </button>
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-light btn-sm"
            data-tooltip="tooltip"
            data-placement="top"
            title="Desktop"
            id="page-creator-desktop"
          >
            <i class="fas fa-desktop"></i>
          </button>
          <button
            type="button"
            class="btn btn-light btn-sm"
            data-tooltip="tooltip"
            data-placement="top"
            title="Mobile"
            id="page-creator-mobile"
          >
            <i class="fas fa-mobile-alt"></i>
          </button>
        </div>
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-light btn-sm"
            data-tooltip="tooltip"
            data-placement="top"
            title="Apps"
          >
            <i class="fas fa-plug"></i>
          </button>
          <div
            class="dropdown"
            id="settings-group"
          >
            <button
              type="button"
              class="btn btn-light btn-sm dropdown-toggle"
              aria-haspopup="true"
              aria-expanded="false"
              data-toggle="dropdown"
              data-tooltip="tooltip"
              data-placement="top"
              title="Settings"
            >
              <i class="fas fa-cogs"></i><span class="btn-text">Settings</span>
            </button>
            <div class="dropdown-menu">
              <div class="nav">
                <a
                  class="dropdown-item"
                  data-toggle="tab"
                  href="#integrations"
                >Integrations</a>
                <a
                  class="dropdown-item"
                  data-toggle="tab"
                  href="#seo"
                >SEO Meta Data</a>
                <a
                  class="dropdown-item"
                  data-toggle="tab"
                  href="#tracking"
                >Tracking Code</a>
                <a
                  class="dropdown-item"
                  data-toggle="tab"
                  href="#css"
                >Custom CSS</a>
                <a
                  class="dropdown-item"
                  data-toggle="tab"
                  href="#background"
                >Background</a>
                <a
                  class="dropdown-item"
                  data-toggle="tab"
                  href="#typography"
                >Typography</a>
                <a
                  class="dropdown-item"
                  data-toggle="tab"
                  href="#general"
                >General</a>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <button
              type="button"
              class="btn btn-light btn-sm dropdown-toggle"
              aria-haspopup="true"
              aria-expanded="false"
              data-toggle="dropdown"
              data-tooltip="tooltip"
              data-placement="top"
              title="Pop up"
            >
              <i class="fas fa-external-link-alt"></i><span class="btn-text">Pop up</span>
            </button>
            <div class="dropdown-menu">
              <a
                class="dropdown-item"
                href="#"
              >Show Popup</a>
              <a
                class="dropdown-item"
                href="#"
              >Edit Settings</a>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-light btn-sm"
            data-tooltip="tooltip"
            data-placement="top"
            title="Undo"
          >
            <i class="fas fa-undo"></i>
          </button>
          <button
            type="button"
            class="btn btn-light btn-sm"
            data-tooltip="tooltip"
            data-placement="top"
            title="Redo"
            disabled
          >
            <i class="fas fa-redo"></i>
          </button>
        </div>
      </div>
      <div class="menu--right">
        <div class="btn-group">
          <div
            class="dropdown"
            id="section-group"
          >
            <button
              type="button"
              class="btn btn-light btn-sm dropdown-toggle"
              aria-haspopup="true"
              aria-expanded="false"
              data-toggle="dropdown"
              data-tooltip="tooltip"
              data-placement="top"
              title="Sections"
            >
              <i class="fas fa-expand"></i><span class="btn-text">Sections</span>
            </button>
            <div class="dropdown-menu">
              <div class="nav">
                <a
                  class="dropdown-item"
                  data-toggle="tab"
                  href="#add-section"
                >Add Section</a>
                <a
                  class="dropdown-item"
                  data-toggle="tab"
                  href="#manage-sections"
                >Manage</a>
              </div>
            </div>
          </div>
          <div
            class="dropdown"
            id="row-group"
          >
            <button
              type="button"
              class="btn btn-light btn-sm dropdown-toggle"
              aria-haspopup="true"
              aria-expanded="false"
              data-toggle="dropdown"
              data-tooltip="tooltip"
              data-placement="top"
              title="Rows"
            >
              <i class="fas fa-bars"></i><span class="btn-text">Rows</span>
            </button>
            <div class="dropdown-menu">
              <div class="nav">
                <a
                  class="dropdown-item"
                  data-toggle="tab"
                  href="#add-row"
                >Add Row</a>
                <a
                  class="dropdown-item"
                  data-toggle="tab"
                  href="#manage-rows"
                >Manage</a>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-light btn-sm"
            data-tooltip="tooltip"
            data-placement="top"
            title="Columns"
            id="column-group"
          >
            <i class="fas fa-columns"></i><span class="btn-text">Columns</span>
          </button>
          <div
            class="dropdown"
            id="element-group"
          >
            <button
              type="button"
              class="btn btn-light btn-sm dropdown-toggle"
              aria-haspopup="true"
              aria-expanded="false"
              data-toggle="dropdown"
              data-tooltip="tooltip"
              data-placement="top"
              title="Elements"
            >
              <i class="fas fa-code"></i><span class="btn-text">Elements</span>
            </button>
            <div class="dropdown-menu">
              <div class="nav">
                <a
                  class="dropdown-item"
                  data-toggle="tab"
                  href="#add-element"
                >Add Element</a>
                <a
                  class="dropdown-item"
                  data-toggle="tab"
                  href="#manage-elements"
                >Manage</a>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-light btn-sm"
            data-tooltip="tooltip"
            data-placement="top"
            title="Preview"
          >
            <i class="far fa-eye"></i><span class="btn-text">Preview</span>
          </button>
          <button
            type="button"
            class="btn btn-light btn-sm"
            data-tooltip="tooltip"
            data-placement="top"
            title="Save"
          >
            <i class="far fa-save"></i><span class="btn-text">Save</span>
          </button>
        </div>
      </div>
    </div>

    <div class="hl_page-creator--content">
      <section class="hl_page-creator--section">
        <div class="hl_page-creator--actions">
          <div class="move-actions">
            <span
              data-tooltip="tooltip"
              data-placement="right"
              title="Up"
            ><i class="icon icon-arrow-up-2"></i></span>
            <span
              data-tooltip="tooltip"
              data-placement="right"
              title="Down"
            ><i class="icon icon-arrow-down-2"></i></span>
          </div>
          <div class="more-actions">
            <span
              data-tooltip="tooltip"
              data-placement="left"
              title="Settings"
            ><i class="fas fa-cog"></i></span>
            <span
              data-tooltip="tooltip"
              data-placement="left"
              title="Clone"
            ><i class="far fa-eye"></i></span>
            <span
              data-tooltip="tooltip"
              data-placement="left"
              title="Save"
            ><i class="far fa-copy"></i></span>
            <span
              data-tooltip="tooltip"
              data-placement="left"
              title="Delete"
            ><i class="far fa-trash-alt"></i></span>
          </div>
        </div>
        <span
          class="add-new-section"
          data-tooltip="tooltip"
          data-placement="bottom"
          title="Add New Section"
        ><i class="icon icon-plus"></i></span>
        <div
          href="#"
          class="new-row-blank"
        >
          <span class="btn btn-light5 btn-slim">Add New Row</span>
        </div>
      </section>

      <section
        class="hl_page-creator--section"
        style="background-color: #f4f4f4; padding: 80px 0; text-align: center;"
      >
        <div class="hl_page-creator--actions">
          <div class="move-actions">
            <span
              data-tooltip="tooltip"
              data-placement="right"
              title="Up"
            ><i class="icon icon-arrow-up-2"></i></span>
            <span
              data-tooltip="tooltip"
              data-placement="right"
              title="Down"
            ><i class="icon icon-arrow-down-2"></i></span>
          </div>
          <div class="more-actions">
            <span
              data-tooltip="tooltip"
              data-placement="left"
              title="Settings"
            ><i class="fas fa-cog"></i></span>
            <span
              data-tooltip="tooltip"
              data-placement="left"
              title="Clone"
            ><i class="far fa-eye"></i></span>
            <span
              data-tooltip="tooltip"
              data-placement="left"
              title="Save"
            ><i class="far fa-copy"></i></span>
            <span
              data-tooltip="tooltip"
              data-placement="left"
              title="Delete"
            ><i class="far fa-trash-alt"></i></span>
          </div>
        </div>
        <span
          class="add-new-section"
          data-tooltip="tooltip"
          data-placement="bottom"
          title="Add New Section"
        ><i class="icon icon-plus"></i></span>
        <div class="hl_page-creator--row">
          <div class="hl_page-creator--actions">
            <div class="move-actions">
              <span
                data-tooltip="tooltip"
                data-placement="top"
                title="Up"
              ><i class="icon icon-arrow-up-2"></i></span>
              <span
                data-tooltip="tooltip"
                data-placement="top"
                title="Down"
              ><i class="icon icon-arrow-down-2"></i></span>
            </div>
            <div class="more-actions">
              <span
                data-tooltip="tooltip"
                data-placement="top"
                title="Settings"
              ><i class="fas fa-cog"></i></span>
              <span
                data-tooltip="tooltip"
                data-placement="top"
                title="Clone"
              ><i class="far fa-eye"></i></span>
              <span
                data-tooltip="tooltip"
                data-placement="top"
                title="Save"
              ><i class="far fa-copy"></i></span>
              <span
                data-tooltip="tooltip"
                data-placement="top"
                title="Delete"
              ><i class="far fa-trash-alt"></i></span>
            </div>
          </div>
          <span
            class="add-new-row"
            data-tooltip="tooltip"
            data-placement="bottom"
            title="Add New Row"
          ><i class="icon icon-plus"></i></span>
          <div class="hl_page-creator--column">
            <div class="hl_page-creator--element">
              <div class="hl_page-creator--actions">
                <div class="more-actions">
                  <span
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Move"
                  ><i class="fas fa-arrows-alt"></i></span>
                  <span
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Clone"
                  ><i class="far fa-eye"></i></span>
                  <span
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Save"
                  ><i class="far fa-copy"></i></span>
                  <span
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Delete"
                  ><i class="far fa-trash-alt"></i></span>
                </div>
              </div>
              <span
                class="add-new-element"
                data-tooltip="tooltip"
                data-placement="bottom"
                title="Add New Element"
              ><i class="icon icon-plus"></i></span>
              <div class="element-container">
                <h1>Heading Text Goes Here</h1>
              </div>
            </div>
            <div class="hl_page-creator--element">
              <div class="hl_page-creator--actions">
                <div class="more-actions">
                  <span
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Move"
                  ><i class="fas fa-arrows-alt"></i></span>
                  <span
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Clone"
                  ><i class="far fa-eye"></i></span>
                  <span
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Save"
                  ><i class="far fa-copy"></i></span>
                  <span
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Delete"
                  ><i class="far fa-trash-alt"></i></span>
                </div>
              </div>
              <span
                class="add-new-element"
                data-tooltip="tooltip"
                data-placement="bottom"
                title="Add New Element"
              ><i class="icon icon-plus"></i></span>
              <div
                class="element-container"
                style="max-width: 700px; margin: 0 auto;"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem architecto
                  quas mollitia voluptates iure consequuntur totam numquam quasi quaerat, iste,
                  libero asperiores optio praesentium autem culpa doloremque laudantium in
                  deleniti, corrupti eaque illo nam quae. Vel nesciunt, libero ipsa similique
                  ipsum ducimus fuga magni. Voluptatum iste pariatur cum doloremque est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="hl_page-creator--section">
        <div class="hl_page-creator--actions">
          <div class="move-actions">
            <span
              data-tooltip="tooltip"
              data-placement="right"
              title="Up"
            ><i class="icon icon-arrow-up-2"></i></span>
            <span
              data-tooltip="tooltip"
              data-placement="right"
              title="Down"
            ><i class="icon icon-arrow-down-2"></i></span>
          </div>
          <div class="more-actions">
            <span
              data-tooltip="tooltip"
              data-placement="left"
              title="Settings"
            ><i class="fas fa-cog"></i></span>
            <span
              data-tooltip="tooltip"
              data-placement="left"
              title="Clone"
            ><i class="far fa-eye"></i></span>
            <span
              data-tooltip="tooltip"
              data-placement="left"
              title="Save"
            ><i class="far fa-copy"></i></span>
            <span
              data-tooltip="tooltip"
              data-placement="left"
              title="Delete"
            ><i class="far fa-trash-alt"></i></span>
          </div>
        </div>
        <span
          class="add-new-section"
          data-tooltip="tooltip"
          data-placement="bottom"
          title="Add New Section"
        ><i class="icon icon-plus"></i></span>
        <div class="hl_page-creator--row">
          <div class="hl_page-creator--actions">
            <div class="move-actions">
              <span
                data-tooltip="tooltip"
                data-placement="top"
                title="Up"
              ><i class="icon icon-arrow-up-2"></i></span>
              <span
                data-tooltip="tooltip"
                data-placement="top"
                title="Down"
              ><i class="icon icon-arrow-down-2"></i></span>
            </div>
            <div class="more-actions">
              <span
                data-tooltip="tooltip"
                data-placement="top"
                title="Settings"
              ><i class="fas fa-cog"></i></span>
              <span
                data-tooltip="tooltip"
                data-placement="top"
                title="Clone"
              ><i class="far fa-eye"></i></span>
              <span
                data-tooltip="tooltip"
                data-placement="top"
                title="Save"
              ><i class="far fa-copy"></i></span>
              <span
                data-tooltip="tooltip"
                data-placement="top"
                title="Delete"
              ><i class="far fa-trash-alt"></i></span>
            </div>
          </div>
          <span
            class="add-new-row"
            data-tooltip="tooltip"
            data-placement="bottom"
            title="Add New Row"
          ><i class="icon icon-plus"></i></span>
          <div class="hl_page-creator--column">
            <div class="hl_page-creator--element">
              <div class="hl_page-creator--actions">
                <div class="more-actions">
                  <span
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Move"
                  ><i class="fas fa-arrows-alt"></i></span>
                  <span
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Clone"
                  ><i class="far fa-eye"></i></span>
                  <span
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Save"
                  ><i class="far fa-copy"></i></span>
                  <span
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Delete"
                  ><i class="far fa-trash-alt"></i></span>
                </div>
              </div>
              <span
                class="add-new-element"
                data-tooltip="tooltip"
                data-placement="bottom"
                title="Add New Element"
              ><i class="icon icon-plus"></i></span>
              <div class="element-container">
                <h3>Heading Text Goes Here</h3>
              </div>
            </div>
            <div class="hl_page-creator--element">
              <div class="hl_page-creator--actions">
                <div class="more-actions">
                  <span
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Move"
                  ><i class="fas fa-arrows-alt"></i></span>
                  <span
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Clone"
                  ><i class="far fa-eye"></i></span>
                  <span
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Save"
                  ><i class="far fa-copy"></i></span>
                  <span
                    data-tooltip="tooltip"
                    data-placement="top"
                    title="Delete"
                  ><i class="far fa-trash-alt"></i></span>
                </div>
              </div>
              <span
                class="add-new-element"
                data-tooltip="tooltip"
                data-placement="bottom"
                title="Add New Element"
              ><i class="icon icon-plus"></i></span>
              <div class="element-container">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus sint at cum
                  ratione, itaque quas assumenda consequatur, exercitationem ipsa
                  necessitatibus, eaque nemo aliquid quasi. Doloremque dolor pariatur ea quod
                  distinctio?
                </p>
              </div>
            </div>
          </div>
          <div class="hl_page-creator--column">
            <div
              href="#"
              class="new-element-blank"
            >
              <span class="btn btn-light6 btn-slim">Add New Element</span>
            </div>
          </div>
          <div class="hl_page-creator--column">
            <div
              href="#"
              class="new-element-blank"
            >
              <span class="btn btn-light6 btn-slim">Add New Element</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
