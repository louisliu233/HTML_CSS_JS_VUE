var that;
class Tab {
  constructor(id) {
    that = this;
    this.main = document.querySelector(id);

    this.add = this.main.querySelector(".tabadd");
    this.ul = this.main.querySelector(".fisrstnav ul:first-child");
    this.fsection = this.main.querySelector(".tabscon");

    this.init();
  }

  init() {
    this.updateNode();
    this.add.onclick = this.addTab;
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = this.toggleTab;
      this.remove[i].onclick = this.removeTab;
      this.spans[i].ondblclick = this.editTab;
      this.sections[i].ondblclick = this.editTab;
    }
  }
  updateNode() {
    this.lis = this.main.querySelectorAll("li");
    this.sections = this.main.querySelectorAll("section");
    this.remove = this.main.querySelectorAll(".icon-guanbi");
    this.spans = this.main.querySelectorAll(".fisrstnav li span:first-child");
  }
  toggleTab() {
    that.classClass();
    this.className = "liactive";
    that.sections[this.index].className = "conactive";
  }
  classClass() {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = "";
      this.sections[i].className = "";
    }
  }
  addTab() {
    that.classClass();
    var random = Math.random();
    var li =
      '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
    var section = '<section class="conactive">测试1' + random + "</section>";
    that.ul.insertAdjacentHTML("beforeend", li);
    that.fsection.insertAdjacentHTML("beforeend", section);
    that.init();
  }

  removeTab(e) {
    e.stopPropagation();
    var index = this.parentNode.index;
    that.lis[index].remove();
    that.sections[index].remove();
    that.init();
    if (document.querySelector(".liactive")) return;
    index--;
    index == -1 && that.lis.length > 1
      ? that.lis[index + 1].click()
      : that.lis[index] && that.lis[index].click();
  }

  editTab() {
    var str = this.innerHTML;
    window.getSelection
      ? window.getSelection().removeAllRanges()
      : document.selection.empty();
    this.innerHTML = '<input type="text" />';
    var input = this.children[0];
    input.value = str;
    input.select();
    input.onblur = function () {
      this.parentNode.innerHTML = this.value;
    };
    input.onkeyup = function (e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    };
  }
}
new Tab("#tab");
