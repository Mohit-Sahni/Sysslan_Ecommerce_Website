/* ============================================= */
/* TechMart Store - Level 5 E-Commerce Website   */
/* Sysslan IT Solutions Web Development Internship */
/* Level 5: Final Website Completion              */
/* ============================================= */

// Global Variables
var cart = [];
var cartCount = 0;
var cartTotal = 0;

// Product Data for Images
var productImages = {
    1: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    2: "https://images.pexels.com/photos/12564670/pexels-photo-12564670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    3: "https://images.pexels.com/photos/29581125/pexels-photo-29581125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    4: "https://images.pexels.com/photos/12877898/pexels-photo-12877898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    5: "https://images.pexels.com/photos/14241847/pexels-photo-14241847.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=650&w=940",
    6: "https://images.pexels.com/photos/8148576/pexels-photo-8148576.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=650&w=940",
    7: "https://images.pexels.com/photos/16428734/pexels-photo-16428734.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=650&w=940",
    8: "https://images.pexels.com/photos/24702077/pexels-photo-24702077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    9: "https://images.pexels.com/photos/17862339/pexels-photo-17862339.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=650&w=940",
    10: "https://images.pexels.com/photos/32677231/pexels-photo-32677231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    11: "https://images.pexels.com/photos/16958879/pexels-photo-16958879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    12: "https://images.pexels.com/photos/8346916/pexels-photo-8346916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
};

document.addEventListener("DOMContentLoaded", function() {
    console.log("==========================================");
    console.log("  TechMart Store - Level 5 Final Version");
    console.log("  Sysslan IT Solutions Internship");
    console.log("  Production-Ready E-Commerce Website");
    console.log("==========================================");

    // Initialize all features
    initPreloader();
    initStickyHeader();
    initScrollToTop();
    initMobileMenu();
    initActiveNavigation();
    initScrollAnimations();
    initCounterAnimation();
    initWishlist();
    initCategoryFilter();
    initProductSearch();
    initViewDetails();
    initAddToCart();
    initCartSidebar();
    initContactForm();
    initNewsletter();
    initSmoothScroll();
    initSearchToggle();
    updateCopyrightYear();
});

// ============================== //
// 1. PRELOADER                   //
// ============================== //
function initPreloader() {
    var preloader = document.getElementById("preloader");
    window.addEventListener("load", function() {
        setTimeout(function() {
            if (preloader) preloader.classList.add("hidden");
        }, 1000);
    });
    setTimeout(function() {
        if (preloader && !preloader.classList.contains("hidden")) {
            preloader.classList.add("hidden");
        }
    }, 4000);
}

// ============================== //
// 2. STICKY HEADER               //
// ============================== //
function initStickyHeader() {
    var header = document.getElementById("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

// ============================== //
// 3. SCROLL TO TOP               //
// ============================== //
function initScrollToTop() {
    var scrollBtn = document.getElementById("scroll-top-btn");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 400) {
            scrollBtn.classList.add("visible");
        } else {
            scrollBtn.classList.remove("visible");
        }
    });
    scrollBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ============================== //
// 4. MOBILE MENU                 //
// ============================== //
function initMobileMenu() {
    var hamburger = document.getElementById("hamburger");
    var navMenu = document.getElementById("nav-menu");
    
    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("open");
    });

    document.querySelectorAll(".nav-link").forEach(function(link) {
        link.addEventListener("click", function() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("open");
        });
    });
}

// ============================== //
// 5. ACTIVE NAVIGATION           //
// ============================== //
function initActiveNavigation() {
    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".nav-link");
    
    window.addEventListener("scroll", function() {
        var scrollY = window.scrollY;
        sections.forEach(function(section) {
            var top = section.offsetTop - 120;
            var height = section.offsetHeight;
            var id = section.getAttribute("id");
            
            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(function(link) {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
}

// ============================== //
// 6. SCROLL ANIMATIONS           //
// ============================== //
function initScrollAnimations() {
    var elements = document.querySelectorAll(".animate-on-scroll");
    
    function checkScroll() {
        var windowHeight = window.innerHeight;
        elements.forEach(function(el, index) {
            var top = el.getBoundingClientRect().top;
            if (top < windowHeight * 0.88 && !el.classList.contains("animated")) {
                setTimeout(function() {
                    el.classList.add("animated");
                }, index * 50);
            }
        });
    }
    
    window.addEventListener("scroll", checkScroll);
    setTimeout(checkScroll, 100);
}

// ============================== //
// 7. COUNTER ANIMATION           //
// ============================== //
function initCounterAnimation() {
    var counters = document.querySelectorAll(".stat-number");
    var started = false;
    
    function animateCounters() {
        if (started) return;
        var statsBar = document.querySelector(".stats-bar");
        if (!statsBar) return;
        
        var top = statsBar.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.85) {
            started = true;
            counters.forEach(function(counter) {
                var target = parseInt(counter.getAttribute("data-target"));
                var duration = 2000;
                var start = null;
                
                function update(time) {
                    if (!start) start = time;
                    var progress = Math.min((time - start) / duration, 1);
                    var ease = 1 - Math.pow(1 - progress, 3);
                    counter.textContent = Math.floor(ease * target).toLocaleString();
                    if (progress < 1) requestAnimationFrame(update);
                    else counter.textContent = target.toLocaleString();
                }
                requestAnimationFrame(update);
            });
        }
    }
    
    window.addEventListener("scroll", animateCounters);
    animateCounters();
}

// ============================== //
// 8. WISHLIST                    //
// ============================== //
function initWishlist() {
    document.querySelectorAll(".product-wishlist").forEach(function(btn) {
        btn.addEventListener("click", function() {
            this.classList.toggle("liked");
            var icon = this.querySelector("i");
            if (this.classList.contains("liked")) {
                icon.classList.replace("far", "fas");
                showToast("Added to wishlist!", "success");
            } else {
                icon.classList.replace("fas", "far");
            }
            this.style.transform = "scale(1.3)";
            var self = this;
            setTimeout(function() { self.style.transform = ""; }, 200);
        });
    });
}

// ============================== //
// 9. CATEGORY FILTER             //
// ============================== //
function initCategoryFilter() {
    var filterBtns = document.querySelectorAll(".filter-btn");
    var products = document.querySelectorAll(".product-card");
    var countText = document.getElementById("product-count-text");
    var noProducts = document.getElementById("no-products-message");
    var resetBtn = document.getElementById("reset-filters");
    
    filterBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            filterBtns.forEach(function(b) { b.classList.remove("active"); });
            this.classList.add("active");
            
            var category = this.getAttribute("data-category");
            filterProducts(category);
        });
    });
    
    if (resetBtn) {
        resetBtn.addEventListener("click", function() {
            filterBtns.forEach(function(b) { b.classList.remove("active"); });
            document.querySelector('[data-category="all"]').classList.add("active");
            filterProducts("all");
            document.getElementById("inline-search").value = "";
        });
    }
    
    function filterProducts(category) {
        var count = 0;
        products.forEach(function(card) {
            var cardCategory = card.getAttribute("data-category");
            if (category === "all" || cardCategory === category) {
                card.classList.remove("hidden");
                card.style.opacity = "0";
                card.style.transform = "translateY(20px)";
                setTimeout(function() {
                    card.style.transition = "opacity 0.4s, transform 0.4s";
                    card.style.opacity = "1";
                    card.style.transform = "";
                }, 50);
                count++;
            } else {
                card.classList.add("hidden");
            }
        });
        
        updateProductCount(category, count);
        noProducts.classList.toggle("show", count === 0);
    }
    
    function updateProductCount(category, count) {
        var name = { electronics: "Electronics", clothing: "Clothing", accessories: "Accessories" }[category] || "all";
        countText.innerHTML = name === "all" 
            ? 'Showing all <strong>' + count + '</strong> products'
            : 'Showing <strong>' + count + '</strong> products in <strong>' + name + '</strong>';
    }
}

// ============================== //
// 10. PRODUCT SEARCH             //
// ============================== //
function initProductSearch() {
    var searchInput = document.getElementById("inline-search");
    var headerSearch = document.getElementById("product-search");
    var clearBtn = document.getElementById("search-clear");
    var products = document.querySelectorAll(".product-card");
    var countText = document.getElementById("product-count-text");
    var noProducts = document.getElementById("no-products-message");
    
    function searchProducts(query) {
        query = query.toLowerCase().trim();
        var count = 0;
        
        // Reset category filters
        document.querySelectorAll(".filter-btn").forEach(function(b) { b.classList.remove("active"); });
        document.querySelector('[data-category="all"]').classList.add("active");
        
        products.forEach(function(card) {
            var name = card.getAttribute("data-name").toLowerCase();
            var category = card.getAttribute("data-category").toLowerCase();
            
            if (query === "" || name.includes(query) || category.includes(query)) {
                card.classList.remove("hidden");
                count++;
            } else {
                card.classList.add("hidden");
            }
        });
        
        countText.innerHTML = query 
            ? 'Found <strong>' + count + '</strong> products for "' + query + '"'
            : 'Showing all <strong>' + count + '</strong> products';
        
        noProducts.classList.toggle("show", count === 0);
    }
    
    if (searchInput) {
        searchInput.addEventListener("input", function() {
            searchProducts(this.value);
            if (headerSearch) headerSearch.value = this.value;
        });
    }
    
    if (headerSearch) {
        headerSearch.addEventListener("input", function() {
            searchProducts(this.value);
            if (searchInput) searchInput.value = this.value;
            clearBtn.classList.toggle("visible", this.value.length > 0);
        });
    }
    
    if (clearBtn) {
        clearBtn.addEventListener("click", function() {
            headerSearch.value = "";
            if (searchInput) searchInput.value = "";
            searchProducts("");
            this.classList.remove("visible");
        });
    }
}

// ============================== //
// 11. VIEW DETAILS TOGGLE        //
// ============================== //
function initViewDetails() {
    document.querySelectorAll(".view-details-btn").forEach(function(btn) {
        btn.addEventListener("click", function() {
            var targetId = this.getAttribute("data-target");
            var content = document.getElementById(targetId);
            
            // Close others
            document.querySelectorAll(".product-details-content.open").forEach(function(c) {
                if (c.id !== targetId) {
                    c.classList.remove("open");
                    var otherBtn = document.querySelector('[data-target="' + c.id + '"]');
                    if (otherBtn) {
                        otherBtn.classList.remove("active");
                        otherBtn.innerHTML = '<i class="fas fa-info-circle"></i> Details';
                    }
                }
            });
            
            content.classList.toggle("open");
            this.classList.toggle("active");
            this.innerHTML = content.classList.contains("open")
                ? '<i class="fas fa-times-circle"></i> Hide'
                : '<i class="fas fa-info-circle"></i> Details';
        });
    });
}

// ============================== //
// 12. ADD TO CART                //
// ============================== //
function initAddToCart() {
    var cartCountEl = document.getElementById("cart-count");
    var sidebarCount = document.getElementById("cart-sidebar-count");
    
    document.querySelectorAll(".add-to-cart-btn").forEach(function(btn) {
        btn.addEventListener("click", function() {
            var id = this.getAttribute("data-id");
            var name = this.getAttribute("data-name");
            var price = parseInt(this.getAttribute("data-price"));
            
            // Check duplicate
            if (cart.find(function(item) { return item.id === id; })) {
                showToast(name + " is already in cart!", "warning");
                return;
            }
            
            // Add to cart
            cart.push({ id: id, name: name, price: price, image: productImages[id] });
            cartCount++;
            cartTotal += price;
            
            // Update UI
            updateCartUI();
            renderCartItems();
            
            // Button feedback
            var span = this.querySelector("span");
            span.textContent = "Added!";
            this.classList.add("added");
            this.disabled = true;
            
            showToast(name + " added to cart!");
            
            // Bump animation
            cartCountEl.classList.add("bump", "has-items");
            setTimeout(function() { cartCountEl.classList.remove("bump"); }, 300);
            
            console.log("Cart:", cart);
        });
    });
    
    function updateCartUI() {
        cartCountEl.textContent = cartCount;
        if (sidebarCount) sidebarCount.textContent = cartCount;
        document.getElementById("cart-total").textContent = "₹" + cartTotal.toLocaleString();
        
        if (cartCount > 0) {
            cartCountEl.classList.add("has-items");
        }
    }
}

// ============================== //
// 13. CART SIDEBAR               //
// ============================== //
function initCartSidebar() {
    var sidebar = document.getElementById("cart-sidebar");
    var overlay = document.getElementById("cart-overlay");
    var openBtn = document.getElementById("cart-icon-btn");
    var closeBtn = document.getElementById("cart-close-btn");
    var shopBtn = document.getElementById("start-shopping");
    var checkoutBtn = document.getElementById("checkout-btn");
    
    openBtn.addEventListener("click", openCart);
    closeBtn.addEventListener("click", closeCart);
    overlay.addEventListener("click", closeCart);
    if (shopBtn) shopBtn.addEventListener("click", closeCart);
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", function() {
            if (cart.length === 0) {
                showToast("Your cart is empty!", "warning");
            } else {
                showToast("Checkout coming soon!", "info");
            }
        });
    }
    
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") closeCart();
    });
    
    function openCart() {
        sidebar.classList.add("open");
        overlay.classList.add("show");
        document.body.style.overflow = "hidden";
    }
    
    function closeCart() {
        sidebar.classList.remove("open");
        overlay.classList.remove("show");
        document.body.style.overflow = "";
    }
}

function renderCartItems() {
    var container = document.getElementById("cart-items");
    var emptyMsg = document.getElementById("cart-empty");
    var footer = document.getElementById("cart-footer");
    
    if (cart.length === 0) {
        emptyMsg.style.display = "flex";
        footer.style.display = "none";
        return;
    }
    
    emptyMsg.style.display = "none";
    footer.style.display = "block";
    
    // Clear existing items
    container.querySelectorAll(".cart-item").forEach(function(item) { item.remove(); });
    
    // Render items
    cart.forEach(function(item) {
        var div = document.createElement("div");
        div.className = "cart-item";
        div.setAttribute("data-id", item.id);
        div.innerHTML = 
            '<div class="cart-item-image"><img src="' + item.image + '" alt="' + item.name + '"></div>' +
            '<div class="cart-item-info">' +
                '<h4 class="cart-item-name">' + item.name + '</h4>' +
                '<p class="cart-item-price">₹' + item.price.toLocaleString() + '</p>' +
            '</div>' +
            '<button class="cart-item-remove" data-id="' + item.id + '"><i class="fas fa-trash"></i></button>';
        container.insertBefore(div, emptyMsg);
    });
    
    // Remove event listeners
    container.querySelectorAll(".cart-item-remove").forEach(function(btn) {
        btn.addEventListener("click", function() {
            removeFromCart(this.getAttribute("data-id"));
        });
    });
}

function removeFromCart(id) {
    var index = cart.findIndex(function(item) { return item.id === id; });
    if (index > -1) {
        var item = cart[index];
        cartTotal -= item.price;
        cart.splice(index, 1);
        cartCount--;
        
        // Update UI
        document.getElementById("cart-count").textContent = cartCount;
        document.getElementById("cart-sidebar-count").textContent = cartCount;
        document.getElementById("cart-total").textContent = "₹" + cartTotal.toLocaleString();
        
        if (cartCount === 0) {
            document.getElementById("cart-count").classList.remove("has-items");
        }
        
        renderCartItems();
        
        // Reset button
        var addBtn = document.querySelector('.add-to-cart-btn[data-id="' + id + '"]');
        if (addBtn) {
            addBtn.classList.remove("added");
            addBtn.disabled = false;
            addBtn.querySelector("span").textContent = "Add to Cart";
        }
        
        showToast(item.name + " removed", "info");
    }
}

// ============================== //
// 14. CONTACT FORM               //
// ============================== //
function initContactForm() {
    var form = document.getElementById("contact-form");
    var nameInput = document.getElementById("contact-name");
    var emailInput = document.getElementById("contact-email");
    var messageInput = document.getElementById("contact-message");
    var submitBtn = document.getElementById("form-submit-btn");
    var successMsg = document.getElementById("form-success");
    var sendAnother = document.getElementById("send-another-btn");
    
    if (!form) return;
    
    // Validation functions
    function validateName() {
        var val = nameInput.value.trim();
        var error = document.getElementById("name-error");
        if (val === "") {
            showInputError(nameInput, error, "Please enter your name");
            return false;
        }
        if (val.length < 2) {
            showInputError(nameInput, error, "Name must be at least 2 characters");
            return false;
        }
        showInputSuccess(nameInput, error);
        return true;
    }
    
    function validateEmail() {
        var val = emailInput.value.trim();
        var error = document.getElementById("email-error");
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (val === "") {
            showInputError(emailInput, error, "Please enter your email");
            return false;
        }
        if (!pattern.test(val)) {
            showInputError(emailInput, error, "Please enter a valid email");
            return false;
        }
        showInputSuccess(emailInput, error);
        return true;
    }
    
    function validateMessage() {
        var val = messageInput.value.trim();
        var error = document.getElementById("message-error");
        if (val === "") {
            showInputError(messageInput, error, "Please enter your message");
            return false;
        }
        if (val.length < 10) {
            showInputError(messageInput, error, "Message must be at least 10 characters");
            return false;
        }
        showInputSuccess(messageInput, error);
        return true;
    }
    
    function showInputError(input, errorEl, msg) {
        input.classList.remove("success");
        input.classList.add("error");
        errorEl.textContent = msg;
    }
    
    function showInputSuccess(input, errorEl) {
        input.classList.remove("error");
        input.classList.add("success");
        errorEl.textContent = "";
    }
    
    // Events
    nameInput.addEventListener("blur", validateName);
    emailInput.addEventListener("blur", validateEmail);
    messageInput.addEventListener("blur", validateMessage);
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        var v1 = validateName();
        var v2 = validateEmail();
        var v3 = validateMessage();
        
        if (v1 && v2 && v3) {
            submitBtn.classList.add("loading");
            submitBtn.disabled = true;
            
            setTimeout(function() {
                submitBtn.classList.remove("loading");
                submitBtn.disabled = false;
                form.style.display = "none";
                successMsg.classList.add("show");
                form.reset();
                nameInput.classList.remove("success");
                emailInput.classList.remove("success");
                messageInput.classList.remove("success");
                console.log("Contact form submitted!");
            }, 2000);
        }
    });
    
    sendAnother.addEventListener("click", function() {
        successMsg.classList.remove("show");
        form.style.display = "flex";
    });
}

// ============================== //
// 15. NEWSLETTER                 //
// ============================== //
function initNewsletter() {
    var form = document.getElementById("newsletter-form");
    var input = document.getElementById("newsletter-email");
    var btn = document.getElementById("newsletter-btn");
    
    if (!form) return;
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        var email = input.value.trim();
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email === "" || !pattern.test(email)) {
            shakeElement(input);
            input.style.borderColor = "#e94560";
            setTimeout(function() { input.style.borderColor = ""; }, 2000);
            return;
        }
        
        btn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
        btn.style.background = "linear-gradient(135deg, #00b894, #00a381)";
        input.value = "";
        input.disabled = true;
        btn.disabled = true;
        
        setTimeout(function() {
            btn.innerHTML = 'Subscribe <i class="fas fa-arrow-right"></i>';
            btn.style.background = "";
            input.disabled = false;
            btn.disabled = false;
        }, 4000);
    });
}

// ============================== //
// 16. SMOOTH SCROLL              //
// ============================== //
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
        link.addEventListener("click", function(e) {
            var href = this.getAttribute("href");
            if (href === "#") return;
            
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                var offset = document.getElementById("header").offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: "smooth"
                });
            }
        });
    });
}

// ============================== //
// 17. SEARCH TOGGLE              //
// ============================== //
function initSearchToggle() {
    var toggleBtn = document.getElementById("search-toggle");
    var searchBar = document.getElementById("search-bar-container");
    var searchInput = document.getElementById("product-search");
    
    if (toggleBtn && searchBar) {
        toggleBtn.addEventListener("click", function() {
            searchBar.classList.toggle("open");
            if (searchBar.classList.contains("open")) {
                setTimeout(function() { searchInput.focus(); }, 300);
            }
        });
    }
}

// ============================== //
// 18. COPYRIGHT YEAR             //
// ============================== //
function updateCopyrightYear() {
    var yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    
    var copyright = document.querySelector(".copyright-text");
    if (copyright) {
        copyright.textContent = "© " + new Date().getFullYear() + " TechMart Store. All Rights Reserved.";
    }
}

// ============================== //
// HELPER FUNCTIONS               //
// ============================== //
function showToast(message, type) {
    var toast = document.getElementById("cart-toast");
    var icon = toast.querySelector("i");
    var text = toast.querySelector("span");
    
    text.textContent = message;
    
    var colors = {
        success: { bg: "#00b894", icon: "fas fa-check-circle" },
        warning: { bg: "#fdcb6e", icon: "fas fa-exclamation-circle" },
        info: { bg: "#0984e3", icon: "fas fa-info-circle" }
    };
    
    var config = colors[type] || colors.success;
    toast.style.background = config.bg;
    toast.style.color = type === "warning" ? "#2d3436" : "#fff";
    icon.className = config.icon;
    
    toast.classList.add("show");
    setTimeout(function() { 
        toast.classList.remove("show"); 
        toast.style.background = "";
        toast.style.color = "";
    }, 3000);
}

function shakeElement(el) {
    var shakes = [0, -8, 8, -6, 6, -3, 3, 0];
    var i = 0;
    function next() {
        if (i < shakes.length) {
            el.style.transform = "translateX(" + shakes[i] + "px)";
            i++;
            setTimeout(next, 60);
        } else {
            el.style.transform = "";
        }
    }
    next();
}

console.log("==========================================");
console.log("  All Level-5 features loaded!");
console.log("  ✓ Product Search");
console.log("  ✓ Category Filters");
console.log("  ✓ Add to Cart + Counter");
console.log("  ✓ Cart Sidebar");
console.log("  ✓ View Details Toggle");
console.log("  ✓ Contact Form Validation");
console.log("  ✓ Newsletter Subscription");
console.log("  ✓ Testimonials Section");
console.log("  ✓ Full Responsive Design");
console.log("  ✓ Production Ready!");
console.log("==========================================");
