class SharedSpriteManager {
  _sprites = [];
  _sprite_list;

  constructor() {}

  async init() {
    // subscribe to sprite_list
    this._sprite_list = ds.record.getList("sprites");

    this._sprite_list.on("entry-added", (id, index) => {
      dslog("sprites entry-added", id, index);
      this._attachSprite(id);
    });

    this._sprite_list.on("entry-removed", (id, index) => {
      dslog("sprites entry-removed", id, index);
      this._detachSprite(id);
    });

    // populate existing sprites
    await this._sprite_list.whenReady();
    const ids = this._sprite_list.getEntries();
    ids.forEach((id) => this._attachSprite(id));
  }

  async addSharedSprite(x, y, w, h, src, type = "SharedSprite", id) {
    const full_id = `sprites/${id || ds.getUid()}`;
    const r = await ds.record.getRecord(full_id);
    r.set({ x, y, w, h, src, type });
    await r.whenReady();

    // wait till record is ready before adding to list
    this._sprite_list.addEntry(full_id);
    return r;
  }

  clear() {
    // remove records from the list first, then delete them
    // so that ids in the list are always valid records
    const ids = this._sprite_list.getEntries();
    this._sprite_list.setEntries([]);
    ids.forEach(async (id) => {
      ds.record.getRecord(id).delete();
    });
  }

  mouseReleased(e) {
    this._sprites.forEach((s) => s.mouseReleased && s.mouseReleased(e));
  }

  mouseMoved(e) {
    this._sprites.forEach((s) => s.mouseMoved && s.mouseMoved(e));
  }

  mouseDragged(e) {
    this._sprites.forEach((s) => s.mouseDragged && s.mouseDragged(e));
  }

  draw() {
    this._sprites.forEach((s) => s.draw && s.draw());
  }

  unload() {
    console.log("unload sharedSpriteManager");
  }

  _attachSprite(id) {
    const r = ds.record.getRecord(id);
    const s = new SharedSprite(id, r);
    this._sprites.push(s);

    debug_king = r;
  }

  _detachSprite(id) {
    ds.record.getRecord(id).discard();
    this.sprites = this._sprites.filter((s) => s.id !== id);
  }

  mousePressed(e) {
    this._sprites.forEach((s) => s.mousePressed && s.mousePressed(e));

    for (let i = this._sprites.length - 1; i >= 0; i--) {
      const s = this._sprites[i];
      if (s.mousePressedInside && s.containsPoint(mouseX, mouseY)) {
        s.mousePressedInside(e);
        break;
      }
    }
  }
}